import { Component } from '@angular/core';
import {InqooAccordionItem} from "../../models/inqoo-accordion-item";
import {InqooButtonClickEvent} from "../../models/inqoo-button-click-event";
import { ExampleService } from 'src/app/services/example.service';
@Component({
  selector: 'app-components-showroom-page',
  templateUrl: './components-showroom-page.component.html',
  styleUrls: ['./components-showroom-page.component.scss']
})
export class ComponentsShowroomPageComponent {

  showClock: boolean = true;

  accordionItems01: InqooAccordionItem[] = [
    {label: 'Label 01', content: 'Content 01', expanded: false},
    {label: 'Label 02', content: 'Content 02', expanded: false},
    {label: 'Label 03', content: 'Content 03', expanded: false},
    {label: 'Label 04', content: 'Content 04', expanded: false}
  ];

  accordionItems02: InqooAccordionItem[] = [
    {label: 'Label 01', content: 'Content 01', expanded: false},
    {label: 'Label 02', content: 'Content 02', expanded: false},
    {label: 'Label 03', content: 'Content 03', expanded: false},
    {label: 'Label 04', content: 'Content 04', expanded: false}
  ];

  largeSecButtonCounter: number = 0;
  defaultButtonCounter: number = 0;
  smallWarningButtonCounter: number = 0;

  toggleClock = () => this.showClock = !this.showClock;
  onLargeSecButtonCounter = () => this.largeSecButtonCounter += 1;
  onSmallWarningButtonCounter = () => this.smallWarningButtonCounter += 1;
  onDefaultButtonCustomClick = (event: InqooButtonClickEvent) => {
    console.log(event);
    this.defaultButtonCounter += 1;
  }
  constructor(private service: ExampleService){
    service.testMe();
    service.setFavouriteColor('red');
    service.testMe();}

}
