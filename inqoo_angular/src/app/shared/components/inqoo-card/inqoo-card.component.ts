import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inqoo-card',
  templateUrl: './inqoo-card.component.html',
  styleUrls: ['./inqoo-card.component.scss']
})
export class InqooCardComponent implements OnInit {

@Input() 'card-title': string;
@Input() 'card-subtitle': string;

  constructor() { }

  ngOnInit(): void {
  }

}
