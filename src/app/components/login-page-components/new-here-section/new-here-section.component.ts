import { Component } from '@angular/core';
import { RegistrationButtonComponent } from '../registration-button/registration-button.component';

@Component({
  selector: 'app-new-here-section',
  standalone: true,
  imports: [RegistrationButtonComponent],
  templateUrl: './new-here-section.component.html',
  styleUrl: './new-here-section.component.scss'
})
export class NewHereSectionComponent {

}
