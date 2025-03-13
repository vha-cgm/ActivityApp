import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-registration-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './registration-button.component.html',
  styleUrl: './registration-button.component.scss'
})
export class RegistrationButtonComponent extends ButtonComponent{
  constructor(){
    super();
    this.text = 'Registration';
    this.color = 'dark';
    this.width = 'w-100';
    this.type = 'submit';
  }

  regitration(){}

}
