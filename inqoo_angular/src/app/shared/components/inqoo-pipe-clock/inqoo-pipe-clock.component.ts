import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-inqoo-pipe-clock',
  templateUrl: './inqoo-pipe-clock.component.html',
  styleUrls: ['./inqoo-pipe-clock.component.scss']
})
export class InqooPipeClockComponent implements OnInit {

  constructor() { }
  myCustomInterval: Observable<number> = interval(1000);
  ngOnInit(): void {
  }

}
