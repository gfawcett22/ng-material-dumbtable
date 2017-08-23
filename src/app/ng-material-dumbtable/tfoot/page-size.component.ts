import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'page-size',
    template:
    `
    <div class='page-size-container'>
        <select [(ngModel)]="currentPageSize" (change)="pageSizeChange()">
            <option *ngFor="let val of pageSizeValues">{{val}}</option>
        </select>
    <div>
    `
})

export class PageSizeComponent {

    @Input() pageSizeValues: string[] = [];

    @Output() pageSize = new EventEmitter<any>();

    currentPageSize: string = this.pageSize[0];

    constructor() { }

    pageSizeChange() {
        this.pageSize.emit(this.currentPageSize);
    }
}
