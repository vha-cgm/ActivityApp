import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavigationComponent } from "../../navigation-bar-components/navigation/navigation.component";
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-filter-page',
  standalone: true,
  imports: [FooterComponent, NavigationComponent, AddButtonComponent],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.scss'
})
export class FilterPageComponent {

}
