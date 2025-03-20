import { Component } from '@angular/core';
import { LoginButtonComponent } from "../login-button/login-button.component";
import { ForgotPasswordButtonComponent } from "../forgot-password-button/forgot-password-button.component";
import { ForgotPasswordSectionComponent } from '../forgot-password-section/forgot-password-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-section',
  standalone: true,
  imports: [LoginButtonComponent, ForgotPasswordButtonComponent, ForgotPasswordSectionComponent, CommonModule],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.scss'
})
export class LoginSectionComponent {
  forgotPassword = false;

}
