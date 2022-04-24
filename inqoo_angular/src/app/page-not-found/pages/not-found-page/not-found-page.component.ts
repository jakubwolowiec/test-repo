import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { RoutesConfig } from 'src/app/app-routing.module';


@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
counter: number = 5;

  constructor(private router: Router) { }
  private timeSubscription: Subscription | undefined;


  ngOnInit(): void {
    
    this.timeSubscription = interval(1000).subscribe(() =>
     {this.counter--; if(this.counter == 0){this.router.navigate([RoutesConfig.home]);
    this.timeSubscription?.unsubscribe();}})
     
    }
  
  ngOnDestroy():void{
    this.timeSubscription?.unsubscribe();
  }
}
