import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inqoo-navbar',
  templateUrl: './inqoo-navbar.component.html',
  styleUrls: ['./inqoo-navbar.component.scss']
})
export class InqooNavbarComponent implements OnInit {

  @Input() routes: {label: string, content: string}[] =[];
  constructor() { }
  
  ngOnInit(): void {
  }

}
