import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RegistrationButtonComponent } from "../registration-button/registration-button.component";
import { LoginButtonComponent } from "../login-button/login-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FooterComponent, RegistrationButtonComponent, LoginButtonComponent, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
