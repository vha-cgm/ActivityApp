import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '#';
}
