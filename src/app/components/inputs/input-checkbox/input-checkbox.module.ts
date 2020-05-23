import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckboxComponent } from './input-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputCheckboxComponent
  ]
})
export class InputCheckboxModule {
}
