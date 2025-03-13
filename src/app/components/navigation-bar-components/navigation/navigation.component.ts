import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutButtonComponent } from "../about-button/about-button.component";
import { LogoutButtonComponent } from "../logout-button/logout-button.component";
import { HomeButtonComponent } from '../home-button/home-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [AboutButtonComponent, LogoutButtonComponent, HomeButtonComponent, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  currentRoute: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Überwache den aktuellen Pfad
    this.currentRoute = this.router.url.split('/')[1];  // Den ersten Teil des Pfades extrahieren
  }
}
