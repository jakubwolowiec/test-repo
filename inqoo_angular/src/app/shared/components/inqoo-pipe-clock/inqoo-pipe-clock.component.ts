import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-inqoo-pipe-clock',
  templateUrl: './inqoo-pipe-clock.component.html',
  styleUrls: ['./inqoo-pipe-clock.component.scss']
})
export class InqooPipeClockComponent implements OnInit {
  
  

  constructor() { }
  
  myCustomInterval: Observable<number> = interval().pipe(map(()=> Date.now()));
  ngOnInit(): void {

  }

}
