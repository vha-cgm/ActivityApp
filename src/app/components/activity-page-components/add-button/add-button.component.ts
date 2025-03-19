import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
})
export class AddButtonComponent extends ButtonComponent{
  @Output() add = new EventEmitter<void>();

  constructor(){
    super();
    this.text = 'Add';
    this.color = 'dark';
    this.width = 'w-100';
    this.type = 'submit';
  }

  onAdd() {
    this.add.emit();
  }
}
