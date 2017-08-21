import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { TableModule } from '../table/table.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [DemoComponent],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
