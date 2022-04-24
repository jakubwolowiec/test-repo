import { Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-inqoo-navbar',
  templateUrl: './inqoo-navbar.component.html',
  styleUrls: ['./inqoo-navbar.component.scss']
})
export class InqooNavbarComponent implements OnInit {

  @Input() routes: {label: string, route: string}[] =[
{
  label: "Homepage",
route:"/home"
  
},

{label: "People",
route:"/sw-people/"
},

{
  label: "Starships",
route: "/sw-starships/"
},
{label: "Components",
route: '**'
}

  ];
  constructor() { }
  
  ngOnInit(): void {
  }

}
