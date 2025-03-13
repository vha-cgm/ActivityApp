import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() required: boolean = false;
}
