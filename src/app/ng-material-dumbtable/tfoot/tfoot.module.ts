import { NgModule } from '@angular/core';

import { TFootComponent } from './tfoot.component';
import { SharedModule } from '../shared/shared.module';
import { PagingComponent } from './paging.component';

@NgModule({
    imports: [SharedModule],
    exports: [TFootComponent],
    declarations: [
        TFootComponent,
        PagingComponent
    ],
    providers: []
})
export class TFootModule { }
