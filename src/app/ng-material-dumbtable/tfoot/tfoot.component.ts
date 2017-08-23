import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Grid } from '../lib/grid';
import { IPagingSettings } from 'app/ng-material-dumbtable/lib/interfaces/IPagingSettings';

@Component({
    selector: '[table-footer]',
    templateUrl: 'tfoot.component.html',
    styles: [
        `
        tr {
            display: flex;
        }
        `
    ]
})

export class TFootComponent implements OnChanges {
    @Input() grid: Grid;

    @Output() paging = new EventEmitter<any>();

    pagingSettings: IPagingSettings;
    pageSizeValues: string[] = [];
    pageSize: string;
    pageNumber: number;

    constructor() { }

    ngOnChanges() {
        this.pagingSettings = this.grid.getSetting('paging');
        this.pageSizeValues = this.pagingSettings.pageSizeValues;
    }

    emitPaging(): void {
        this.paging.emit({
            pageSize: this.pageSize,
            pageNumber: this.pageNumber
        });
    }
}
