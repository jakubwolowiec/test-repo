import {Component, Input} from '@angular/core';
import {InqooAccordionItem} from "../../models/inqoo-accordion-item";

@Component({
  selector: 'app-inqoo-accordion',
  templateUrl: './inqoo-accordion.component.html',
  styleUrls: ['./inqoo-accordion.component.scss']
})
export class InqooAccordionComponent {

  @Input() items: InqooAccordionItem[] = [];
  @Input() alwaysOpen: boolean = false;

  onItemExpand = (expanded: boolean, index: number) => {
    if(!this.alwaysOpen){
      this.items = this.items.map((item, i) =>
        ({...item, expanded: i === index ? item.expanded = expanded : false}))
    }
  }
}
