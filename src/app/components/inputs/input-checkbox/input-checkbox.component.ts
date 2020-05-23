import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true
    }
  ]
})
export class InputCheckboxComponent implements ControlValueAccessor {
  val = false;

  constructor() {
  }

  onChange: any = () => {
  }

  onTouch: any = () => {
  }

  set value(val) {
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}
