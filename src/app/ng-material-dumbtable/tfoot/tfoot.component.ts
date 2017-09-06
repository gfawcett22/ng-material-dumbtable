import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Grid } from '../lib/grid';
import { IPagingSettings } from '../lib/interfaces/IPagingSettings';

@Component({
    selector: '[table-footer]',
    templateUrl: 'tfoot.component.html',
    styles: [
        `
        `
    ]
})

export class TFootComponent implements OnChanges {
    @Input() grid: Grid;

    @Output() paging = new EventEmitter<any>();

    columnCount: number;
    pagingSettings: IPagingSettings;
    pageSizeValues: number[] = [];
    defaultPageSize: number;
    currentPageNumber: number;
    totalRecords: number;

    // Object with pageSize and pageNumber properties that is emitted when page size or number changes
    pageValues: any = {};

    constructor() {}

    ngOnChanges() {
        this.pagingSettings = this.grid.getSetting('paging');
        this.pageSizeValues = this.pagingSettings.pageSizeValues;
        this.defaultPageSize = this.pagingSettings.defaultPageSize || this.pageSizeValues[0];
        this.currentPageNumber = this.pagingSettings.currentPageNumber;
        this.totalRecords = this.pagingSettings.totalRecordCount;
        this.columnCount = Object.keys(this.grid.getSetting('columns')).length + 1;
    }
}
