import { TableCellComponent } from '../table-cell/table-cell.component';
import { TableEditDeleteComponent } from './table-edit-delete/table-edit-delete.component';
import { NgModule } from '@angular/core';

import { TBodyComponent } from './tbody.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [TBodyComponent],
    declarations: [
        TBodyComponent,
        TableEditDeleteComponent,
        TableCellComponent
    ],
    providers: [],
})
export class TBodyModule { }
