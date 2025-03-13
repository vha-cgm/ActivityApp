import { Component } from '@angular/core';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'app-about-first-name-input',
  templateUrl: './about-first-name-input.component.html',
  styleUrls: ['./about-first-name-input.component.scss'],
  standalone: true,
  imports: [InputFieldComponent]
})
export class AboutFirstNameComponent extends InputFieldComponent {
  constructor() {
    super();
    this.type = 'firstName';
    this.title = 'First Name';
    this.placeholder = 'First Name';
    this.id = 'aboutfirstname';
    this.required = true;
  }
}
