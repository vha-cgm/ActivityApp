import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent extends ButtonComponent{
  constructor(){
    super();
    this.text = 'Login';
    this.color = 'dark';
    this.width = 'w-100';
    this.type = 'submit';
  }

  login(){}

}
