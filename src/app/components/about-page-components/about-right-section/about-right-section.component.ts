import { Component } from '@angular/core';
import { AboutLastNameComponent } from "../about-last-name-input/about-last-name-input.component";
import { AboutFirstNameComponent } from "../about-first-name-input/about-first-name-input.component";
import { AboutEmailComponent } from "../about-email-input/about-email-input.component";

@Component({
  selector: 'app-about-right-section',
  standalone: true,
  imports: [AboutLastNameComponent, AboutFirstNameComponent, AboutEmailComponent],
  templateUrl: './about-right-section.component.html',
  styleUrl: './about-right-section.component.scss'
})
export class AboutRightSectionComponent {

}
