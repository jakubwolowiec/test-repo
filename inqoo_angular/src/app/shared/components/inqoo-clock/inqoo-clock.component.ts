import {Component, OnInit, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-inqoo-clock',
  templateUrl: './inqoo-clock.component.html',
  styleUrls: ['./inqoo-clock.component.scss']
})
export class InqooClockComponent implements OnInit, OnDestroy {

  hour: number = new Date().getHours();
  minutes: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();

  private timeSubscription: Subscription | undefined;


  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(() => this.setCurrentTime());
  }

  ngOnDestroy() {
    this.timeSubscription?.unsubscribe();
  }

  setCurrentTime = () => {
    const date = new Date();
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

}
