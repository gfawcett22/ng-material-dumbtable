import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
    selector: 'table-paging',
    template:
    `
        <div class='paging-container'>
            <md-paginator [pageSize]="defaultPageSize"
                          [pageSizeOptions]="pageSizeOptions"
                          [pageIndex]="currentPageNumber"
                          [length]="totalRecords"
                          (page)="pagingEvent.emit($event)">
            </md-paginator>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagingComponent implements OnInit {
    @Input() pageSizeOptions: number[] = [];
    @Input() defaultPageSize: number;
    @Input() currentPageNumber: number;
    @Input() totalRecords: number;

    @Output() pagingEvent = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {
        console.log(this.totalRecords);
    }
}
