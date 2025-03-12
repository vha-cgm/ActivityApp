import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponentComponent } from './home-page/home-page-component';

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
