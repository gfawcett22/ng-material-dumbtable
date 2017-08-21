import { NgModule } from '@angular/core';

import { TFootComponent } from './tfoot.component';
import { PageSizeComponent } from 'app/table/tfoot/page-size.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        TFootComponent,
        PageSizeComponent
    ],
    providers: [],
})
export class TFootModule { }
