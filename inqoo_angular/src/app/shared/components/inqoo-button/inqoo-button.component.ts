import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {InqooButtonClickEvent} from "../../models/inqoo-button-click-event";
import { InqooBadgeComponent } from '../inqoo-badge/inqoo-badge.component';
@Component({
  selector: 'app-inqoo-button',
  templateUrl: './inqoo-button.component.html',
  styleUrls: ['./inqoo-button.component.scss']
})
export class InqooButtonComponent extends InqooBadgeComponent implements OnInit {

  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Input() size: 'small' | 'large' | 'default' = 'default';

  @Output() buttonCustomClick = new EventEmitter<InqooButtonClickEvent>();

  ngOnInit() {
      console.log(this.size)
  }

  onClick = () => this.counter =+1 ;

  isSmall = () => this.size === 'small';
  isLarge = () => this.size === 'large';
}
