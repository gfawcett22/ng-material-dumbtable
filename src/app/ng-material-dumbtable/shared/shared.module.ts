import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSelectModule,
  MdPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSelectModule,
        MdPaginatorModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
