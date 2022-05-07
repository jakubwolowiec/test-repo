import { Component, Input, OnInit } from '@angular/core';
import { Starship } from 'src/app/api/models/starship-interface';
import { InqooCardComponent } from 'src/app/shared/components/inqoo-card/inqoo-card.component';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
@Input() starship: Starship | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
