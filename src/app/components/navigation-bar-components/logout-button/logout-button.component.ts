import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent extends ButtonComponent{
  constructor(private router: Router) {
    super();
    this.text = 'Logout';
    this.color = 'dark';
    this.width = 'w-50';
    this.type = 'submit';
  }
  
  goLogin(){
    this.router.navigate(['/login-page-component']);
  }
}
