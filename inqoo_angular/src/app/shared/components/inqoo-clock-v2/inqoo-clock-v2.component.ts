import {Component, Input} from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-inqoo-clock-v2',
  templateUrl: './inqoo-clock-v2.component.html',
  styleUrls: ['./inqoo-clock-v2.component.scss']
})
export class InqooClockV2Component {

  @Input() timeFormat: string = 'mediumTime';

  myCustomInterval: Observable<number> = interval().pipe(
    map(() => Date.now())
  );
}
