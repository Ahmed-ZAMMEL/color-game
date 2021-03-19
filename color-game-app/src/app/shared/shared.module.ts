import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormFieldComponent, LoadingComponent]
})
export class SharedModule { }
