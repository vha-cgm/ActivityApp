import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-button',
  standalone: true,
  imports: [],
  templateUrl: './about-button.component.html',
  styleUrl: './about-button.component.scss'
})
export class AboutButtonComponent {

  constructor(private router: Router) {}
  
  goAbout(){
    this.router.navigate(['/about-page-component']);
  }

}
