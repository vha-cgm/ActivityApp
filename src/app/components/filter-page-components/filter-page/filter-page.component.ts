import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavigationComponent } from "../../navigation-bar-components/navigation/navigation.component";

@Component({
  selector: 'app-filter-page',
  standalone: true,
  imports: [FooterComponent, NavigationComponent],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.scss'
})
export class FilterPageComponent {

}
