import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RegistrationButtonComponent } from '../registration-button/registration-button.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { CommonModule } from '@angular/common';
import { LoginSectionComponent } from '../login-section/login-section.component';
import { NewHereSectionComponent } from '../new-here-section/new-here-section.component';
import { ForgotPasswordSectionComponent } from '../forgot-password-section/forgot-password-section.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FooterComponent, CommonModule, LoginSectionComponent, NewHereSectionComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
}
