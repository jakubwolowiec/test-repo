import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-inqoo-badge',
  templateUrl: './inqoo-badge.component.html',
  styleUrls: ['./inqoo-badge.component.scss']
})
export class InqooBadgeComponent implements OnChanges, OnInit, OnDestroy{

  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Input() size: 1 | 2 | 3 | 4 | 5 | 6 = 3;
  @Input() counter: number = 0;

  constructor() {
    // console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    // console.log('ngOnInit')
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy')
  }

}
