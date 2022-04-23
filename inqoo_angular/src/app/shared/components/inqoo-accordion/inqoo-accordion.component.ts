import {Component, Input} from '@angular/core';
import {InqooAccordionItem} from "../../models/inqoo-accordion-item";

@Component({
  selector: 'app-inqoo-accordion',
  templateUrl: './inqoo-accordion.component.html',
  styleUrls: ['./inqoo-accordion.component.scss']
})
export class InqooAccordionComponent {

  @Input() items: InqooAccordionItem[] = [];

}
