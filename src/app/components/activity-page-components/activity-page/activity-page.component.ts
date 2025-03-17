import { Component } from '@angular/core';
import { ActivityCardComponent } from '../activity-card/activity-card.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { FooterComponent } from "../../footer/footer.component";
import { NavigationComponent } from "../../navigation-bar-components/navigation/navigation.component";

@Component({
  selector: 'app-activity-page',
  standalone: true,
  imports: [ActivityCardComponent, AddButtonComponent, FooterComponent, NavigationComponent],
  templateUrl: './activity-page.component.html',
  styleUrl: './activity-page.component.scss'
})
export class ActivityPageComponent {
  activities = [
    { title: 'Hiking Trip', imageSrc: 'assets/hiking.jpg' },
    { title: 'Yoga Session', imageSrc: 'assets/yoga.jpg' },
    { title: 'Cooking Class', imageSrc: 'assets/cooking.jpg' },
    { title: 'Photography Walk', imageSrc: 'assets/photography.jpg' },
    { title: 'Coding Bootcamp', imageSrc: 'assets/coding.jpg' },
    { title: 'Meditation Retreat', imageSrc: 'assets/meditation.jpg' }
  ];

  addActivity() {
    console.log('Add new activity');
  }

  deleteActivity(index: number) {
    this.activities.splice(index, 1);
  }
}
