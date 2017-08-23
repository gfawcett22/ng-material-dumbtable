import { NgModule } from '@angular/core';

import { TFootComponent } from './tfoot.component';
import { PageSizeComponent } from 'app/ng-material-dumbtable/tfoot/page-size.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [TFootComponent],
    declarations: [
        TFootComponent,
        PageSizeComponent
    ],
    providers: []
})
export class TFootModule { }
