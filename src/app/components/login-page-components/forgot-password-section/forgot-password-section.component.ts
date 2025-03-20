import { Component } from '@angular/core';
import { ForgotPasswordButtonComponent } from '../forgot-password-button/forgot-password-button.component';
import { ResetPasswordButtonComponent } from '../reset-password-button/reset-password-button.component';

@Component({
  selector: 'app-forgot-password-section',
  standalone: true,
  imports: [ResetPasswordButtonComponent],
  templateUrl: './forgot-password-section.component.html',
  styleUrl: './forgot-password-section.component.scss'
})
export class ForgotPasswordSectionComponent {

}
