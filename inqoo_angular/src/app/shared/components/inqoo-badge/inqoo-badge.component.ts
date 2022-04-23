import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inqoo-badge',
  templateUrl: './inqoo-badge.component.html',
  styleUrls: ['./inqoo-badge.component.scss']
})
export class InqooBadgeComponent {

  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Input() size: 1 | 2 | 3 | 4 | 5 | 6 = 3;
  @Input() counter: number = 0;

}
