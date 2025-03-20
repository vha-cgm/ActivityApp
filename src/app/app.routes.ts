import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page-components/login-page/login-page.component';
import { NavigationComponent } from './components/navigation-bar-components/navigation/navigation.component';
import { AboutPageComponent } from './components/about-page-components/about-page/about-page.component';
import { HomePageComponentComponent } from './components/home-page-components/home-page/home-page-component';
import { ActivityPageComponent } from './components/activity-page-components/activity-page/activity-page.component';
import { FilterPageComponent } from './components/filter-page-components/filter-page/filter-page.component';
import { ProfilePageComponent } from './components/profile-page-components/profile-page/profile-page.component';

export const routes: Routes = [
  {
    path: 'login-page-component',
    redirectTo: '', // Weiterleitung zur Root-Route
    pathMatch: 'full',
  },
  {
    path: '',
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
  {
    path: 'activity-page-component',
    component: ActivityPageComponent,
  }, 
  {
    path: 'filter-page-component',
    component: FilterPageComponent,
  },  
  {
    path: 'profile-page-component',
    component: ProfilePageComponent,
  },
];
