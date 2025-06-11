
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';

@Component({
  
  selector: 'app-kendo-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kendo-input-field.component.html',
  styleUrl: './kendo-input-field.component.scss'
})
export class KendoInputFieldComponent implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() public type: 'text' | 'password' | 'email' = 'text';
  @Input() public control: AbstractControl | null = null; // The FormControl instance from the parent
  @Input() public placeholder: string = '';
  @Input() public hint: string = '';
  @Input() public required: boolean = false;
  @Input() public name: string = ''; // Used for associating label with input

  public value: any = '';
  public isDisabled: boolean = false;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {}

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  get isInvalidAndTouched(): boolean {
    return !!this.control && this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get errorMessage(): string {
    if (!this.control || !this.control.errors) {
      return '';
    }

    if (this.control.errors['required']) {
      return`${this.label} is required.`;
    }
    if (this.control.errors['minlength']) {
      return `${this.label} must be at least ${this.control.errors['minlength'].requiredLength} characters.`;
    }
    if (this.control.errors['maxlength']) {
      return `${this.label} cannot exceed ${this.control.errors['maxlength'].requiredLength} characters.`;
    }
    if (this.control.errors['email']) {
      return `Please enter a valid email address.`;
    }
    if (this.control.errors['pattern']) {
      return `Please enter a valid ${this.label.toLowerCase()}.`;
    }
    // Add more custom error messages as needed based on your validators
    return 'Invalid input.';
  }
}