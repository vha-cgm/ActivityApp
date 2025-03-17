import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-filter-your-way-to-fun-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter-your-way-to-fun-button.component.html',
  styleUrl: './filter-your-way-to-fun-button.component.scss'
})
export class FilterYourWayToFunButtonComponent extends ButtonComponent{

  constructor(){
    super();
    this.text = 'Filter your way to fun!';
    this.color = 'dark';
    this.width = 'w-100';
    this.type = 'submit';
  }

  filter(){}

}
