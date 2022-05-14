import {Component, Input, OnInit} from '@angular/core';
import {Starship} from "../../../api/models/starship";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent {
  @Input() starship: Starship | undefined;

}
