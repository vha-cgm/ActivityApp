import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-forgot-password-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './forgot-password-button.component.html',
  styleUrl: './forgot-password-button.component.scss'
})
export class ForgotPasswordButtonComponent extends ButtonComponent{

  constructor(){
    super();
    this.text = 'Forgot password?';
    this.color = 'gray';
    this.width = 'w-50';
    this.type = 'button';
  }

  forgotPassword(){}
}
