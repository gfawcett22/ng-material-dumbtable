import { NgModule } from '@angular/core';


import { TableComponent } from './table.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { THeadModule } from './thead/thead.module';
import { TBodyModule } from './tbody/tbody.module';
import { SharedModule } from './shared/shared.module';
import { TFootModule } from './tfoot/tfoot.module';


@NgModule({
  imports: [
    SharedModule,
    THeadModule,
    TBodyModule,
    TFootModule
  ],
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
