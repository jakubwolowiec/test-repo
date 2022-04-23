import { Component } from '@angular/core';
import {InqooButtonClickEvent} from "./shared/models/inqoo-button-click-event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inqoo_angular';


  onButtonCustomClick = (event: InqooButtonClickEvent) => console.log('onButtonCustomClick', event);
}
