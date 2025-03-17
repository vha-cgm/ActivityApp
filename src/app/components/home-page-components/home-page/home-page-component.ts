import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation-bar-components/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer.component';
import { FilterYourWayToFunButtonComponent } from '../filter-your-way-to-fun-button/filter-your-way-to-fun-button.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [NavigationComponent, FooterComponent, FilterYourWayToFunButtonComponent, CardComponent],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.scss'
})
export class HomePageComponentComponent {

}
