import { Component, Input , Output, EventEmitter} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() color: 'dark' | 'gray' | 'light orange' = 'dark';
  @Input() width: string = 'w-100';
  @Input() type: 'button' | 'submit' = 'button';

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
