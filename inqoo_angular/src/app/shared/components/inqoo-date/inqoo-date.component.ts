import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inqoo-date',
  templateUrl: './inqoo-date.component.html',
  styleUrls: ['./inqoo-date.component.scss']
})
export class InqooDateComponent {

  @Input() dateFormat: string = 'fullDate';
  currentDate: Date = new Date();
}
