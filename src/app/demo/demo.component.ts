import { Row } from '../ng-material-dumbtable/lib/row';
import { Customer } from './customer.interface';
import { Component, OnInit } from '@angular/core';
import { ITableSettings } from '../ng-material-dumbtable/lib/interfaces/ITableSettings';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styles: [
        `
        .mat-raised-button{
            color: black;
        }
        `
    ]
})

export class DemoComponent {
    customers: Customer[] = [
      {id: 1, name: 'Customer 1', address: '123 Cherry St.', business: 'Some type of business'},
      {id: 2, name: 'Customer 2', address: '123 Orange St.', business: 'Office Supplies'},
      {id: 3, name: 'Customer 3', address: '123 Apple St.', business: 'Fitness Equipment'},
      {id: 4, name: 'Customer 4', address: '123 Strawberry St.', business: 'Software Development'}
    ];

    settings: ITableSettings = {
        columns: {
            name: {title: 'Name', sortable: true, sortDirection: 'asc', filterable: true, currentSort: true},
            address: {title: 'Address', sortable: true, sortDirection: 'asc', filterable: true, currentSort: false},
            business: {title: 'Business', sortable: true, sortDirection: 'asc', filterable: true, currentSort: false}
        },
        sortColumn: 'Name',
        showActionButtons: true,
        noResultsMessage: 'No Results',
        paging: {
            enabled: true,
            currentPageNumber: 1,
            pageSizeValues: ['25', '50', '100']
        }
    };

    constructor() { }

    edit(row: Row) {
        console.log('Edit emitted', row);
    }

    create() {
        console.log('Create emitted');
    }

    delete(row: Row) {
      console.log('Delete emitted', row);
    }

    filter($event): void {
      console.log('Filter emitted', $event);
    }

    sort($event): void {
      console.log($event);
    }
}
