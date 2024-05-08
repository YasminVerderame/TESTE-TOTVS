import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: []
})
export class SelectComponent {
  @Input() options: { value: string, label: string }[] = [];
  @Input() disabled: boolean = false;
  selectedValue: string = '';
  touched: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelected(event: any): void {
    const value = event.target.value;
    this.selectedValue = value;

    if (value === '' && this.touched) {
      this.onChange(null);
    } else {
      this.onChange(value);
    }
    this.onTouch(value);
  }
}
