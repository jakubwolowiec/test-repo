import {Component, Input, OnInit} from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';

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
