import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true
})
export class ProfileComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() username?: string; // optionaler Benutzername
}
