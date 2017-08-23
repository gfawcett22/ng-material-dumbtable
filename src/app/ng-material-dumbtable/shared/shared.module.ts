import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule
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
        MdNativeDateModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
