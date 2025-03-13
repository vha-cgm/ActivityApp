import { Component } from '@angular/core';
import { LoginButtonComponent } from "../login-button/login-button.component";
import { ForgotPasswordButtonComponent } from "../forgot-password-button/forgot-password-button.component";

@Component({
  selector: 'app-login-section',
  standalone: true,
  imports: [LoginButtonComponent, ForgotPasswordButtonComponent],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.scss'
})
export class LoginSectionComponent {

}
