import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.scss'
})
export class HomeButtonComponent {

  constructor(private router: Router) {}

  goHome(){
    this.router.navigate(['/home-page-component']);
  }
}
