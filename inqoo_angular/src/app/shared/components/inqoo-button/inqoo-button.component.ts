import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';
import {InqooButtonClickEvent} from "../../models/inqoo-button-click-event";

@Component({
  selector: 'app-inqoo-button',
  templateUrl: './inqoo-button.component.html',
  styleUrls: ['./inqoo-button.component.scss'],
})
export class InqooButtonComponent {

  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Input() size: 'small' | 'large' | 'default' = 'default';

  @Output() onClick = new EventEmitter<InqooButtonClickEvent>();

  click = () => this.onClick.emit({ timestamp: Date.now()});

  isSmall = () => this.size === 'small';
  isLarge = () => this.size === 'large';

  constructor(private service: ExampleService){
    service.testMe();
    service.setFavouriteColor('red');
    service.testMe();}
}
