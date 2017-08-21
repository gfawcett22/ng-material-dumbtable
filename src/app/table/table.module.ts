import { TBodyModule } from './tbody/tbody.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { THeadModule } from './thead/thead.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    THeadModule,
    TBodyModule,
  ],
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
