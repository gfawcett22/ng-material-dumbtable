import { CustomerPagingResult } from './models/customer-paging-result.interface';
import { Row } from '../table/lib/row';
import { CustomerPagingParameters } from './models/customer-paging-parameters.interface';
import { CustomerService } from './services/customer.service';
import { Customer } from './models/customer.interface';
import { Component, OnInit } from '@angular/core';
import { ITableSettings } from '../table/lib/interfaces/ITableSettings';

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
            pageSizeValues: ['25', '50', '100']
        }
    };

    constructor() { }

    openEditDialog(row: Row) {
        console.log('Edit emitted', row);
    }

    openDetailDialog(row: Row) {
        console.log(row);
    }

    openCreateDialog() {
        console.log('Create emitted');
    }

    filter($event): void {
      console.log('Filter emitted', $event);
    }

    sort($event): void {
      console.log($event);
    }
}
