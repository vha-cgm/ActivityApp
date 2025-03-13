import { Component } from '@angular/core';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'app-about-last-name-input',
  templateUrl: './about-last-name-input.component.html',
  styleUrls: ['./about-last-name-input.component.scss'],
  standalone: true,
  imports: [InputFieldComponent]
})
export class AboutLastNameComponent extends InputFieldComponent {
  constructor() {
    super();
    this.type = 'lastName';
    this.title = 'Last Name';
    this.placeholder = 'Last Name';
    this.id = 'aboutlastname';
    this.required = true;
  }
}
