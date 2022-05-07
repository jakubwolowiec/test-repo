import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inqoo-date',
  templateUrl: './inqoo-date.component.html',
  styleUrls: ['./inqoo-date.component.scss']
})
export class InqooDateComponent implements OnInit {

  currentDate: Date = new Date;
  @Input() dateFormat: string = 'fullDate';
  constructor() { }

  ngOnInit(): void {
  }

}
