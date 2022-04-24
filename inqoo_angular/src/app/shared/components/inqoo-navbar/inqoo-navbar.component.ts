import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RoutesConfig } from 'src/app/app-routing.module';

@Component({
  selector: 'app-inqoo-navbar',
  templateUrl: './inqoo-navbar.component.html',
  styleUrls: ['./inqoo-navbar.component.scss']
})
export class InqooNavbarComponent implements OnInit {

  @Input() routes: { label: string, route: string }[] = [];

  constructor(){}
  

  ngOnInit(): void {
  
  }

}
