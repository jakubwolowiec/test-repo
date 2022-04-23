import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inqoo-badge',
  templateUrl: './inqoo-badge.component.html',
  styleUrls: ['./inqoo-badge.component.scss']
})
export class InqooBadgeComponent {

  @Input() counter: number = 0;
    
  
}
