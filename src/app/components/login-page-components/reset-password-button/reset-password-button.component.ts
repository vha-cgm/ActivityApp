import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-reset-password-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './reset-password-button.component.html',
  styleUrl: './reset-password-button.component.scss'
})
export class ResetPasswordButtonComponent extends ButtonComponent{

  constructor(){
    super();
    this.text = 'Reset password';
    this.color = 'dark';
    this.width = 'w-100';
    this.type = 'submit';
  }
  
  resetPassword(){}
}
