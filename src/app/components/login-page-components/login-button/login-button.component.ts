import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { ProfileComponent } from '../../../profiles/profile/profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent extends ButtonComponent{
  @Input() profile!: ProfileComponent;

  constructor(private router: Router){
    super();
    this.text = 'Login';
    this.color = 'dark';
    this.width = 'w-100';
    this.type = 'submit';
  }

  login(){
    if(this.profile?.passwordCheck()){

    }else{

    }

    this.router.navigate(['/home-page-component']);
  }

  

}
