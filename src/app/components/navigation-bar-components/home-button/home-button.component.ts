import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.scss'
})
export class HomeButtonComponent extends ButtonComponent{

  constructor(private router: Router) {
    super();
    this.text = 'Home';
    this.color = 'gray';
    this.width = 'w-50';
    this.type = 'submit';
  }

  goHome(){
    this.router.navigate(['/home-page-component']);
  }
}
