import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-inqoo-accordion-item',
  templateUrl: './inqoo-accordion-item.component.html',
  styleUrls: ['./inqoo-accordion-item.component.scss']
})
export class InqooAccordionItemComponent{

  @Input() label: string = '';

  @Input() expanded: boolean = false;

  @Output() 
  onClick = () => this.expanded = !this.expanded;

}
