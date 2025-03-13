import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationComponent } from './components/navigation-bar-components/navigation/navigation.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponentComponent } from './components/home-page/home-page-component';

export const routes: Routes = [
  {
    path: 'login-page-component',
    component: LoginPageComponent,
  },
  {
    path: 'navigation-component',
    component: NavigationComponent,
  },  
  {
    path: 'about-page-component',
    component: AboutPageComponent,
  }, 
  {
    path: 'home-page-component',
    component: HomePageComponentComponent,
  },  
];
