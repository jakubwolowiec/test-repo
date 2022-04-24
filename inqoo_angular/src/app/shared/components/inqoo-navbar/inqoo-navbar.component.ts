import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inqoo-navbar',
  templateUrl: './inqoo-navbar.component.html',
  styleUrls: ['./inqoo-navbar.component.scss']
})
export class InqooNavbarComponent implements OnInit {

  @Input() routes: {label: string, root: string}[] =[
{label: "Starships",
root: ""
},

{label: "People",
root:""
},

{label: "Components",
root:""
}

  ];
  constructor() { }
  
  ngOnInit(): void {
  }

}
