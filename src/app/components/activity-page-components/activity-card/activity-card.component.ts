import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
