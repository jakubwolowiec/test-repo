import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  timeLeft: number = 5;

  private timeSubscription: Subscription | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(() => {
      this.timeLeft -=1;
      if(this.timeLeft < 0){
        this.router.navigate([RoutesConfig.home])
      }
    });
  }

  ngOnDestroy() {
    this.timeSubscription?.unsubscribe();
  }

}
