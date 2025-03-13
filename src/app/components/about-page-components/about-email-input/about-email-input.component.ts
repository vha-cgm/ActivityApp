import { Component } from '@angular/core';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'app-about-email-input',
  templateUrl: './about-email-input.component.html',
  styleUrls: ['./about-email-input.component.scss'],
  standalone: true,
  imports: [InputFieldComponent]
})
export class AboutEmailComponent extends InputFieldComponent {
  constructor() {
    super();
    this.type = 'email';
    this.title = 'Email';
    this.placeholder = 'Email';
    this.id = 'aboutemail';
    this.required = true;
  }
}
