import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-about-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-button.component.html',
  styleUrl: './about-button.component.scss'
})
export class AboutButtonComponent extends ButtonComponent{

  constructor(private router: Router) {
    super();
    this.text = 'About';
    this.color = 'gray';
    this.width = 'w-50';
    this.type = 'submit';
  }
  
  goAbout(){
    this.router.navigate(['/about-page-component']);
  }

}
