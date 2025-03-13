import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RegistrationButtonComponent } from "../login-page-components/registration-button/registration-button.component";
import { LoginButtonComponent } from "../login-page-components/login-button/login-button.component";
import { CommonModule } from '@angular/common';
import { LoginSectionComponent } from "../login-page-components/login-section/login-section.component";
import { NewHereSectionComponent } from "../login-page-components/new-here-section/new-here-section.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FooterComponent, RegistrationButtonComponent, LoginButtonComponent, CommonModule, LoginSectionComponent, NewHereSectionComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
