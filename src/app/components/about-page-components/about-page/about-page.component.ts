import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation-bar-components/navigation/navigation.component';
import { FooterComponent } from '../../footer/footer.component';
import { AboutLeftSectionComponent } from '../about-left-section/about-left-section.component';
import { AboutRightSectionComponent } from '../about-right-section/about-right-section.component';
@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NavigationComponent, FooterComponent, AboutLeftSectionComponent, AboutRightSectionComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
