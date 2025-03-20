import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-icon',
  standalone: true,
  imports: [],
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.scss'
})
export class ProfileIconComponent {

  constructor(private router: Router) {}

  goProfile(){
    this.router.navigate(['/profile-page-component']);
  }

}
