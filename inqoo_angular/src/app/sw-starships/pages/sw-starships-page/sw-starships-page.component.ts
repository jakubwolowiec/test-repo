import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../../api/services/swapi.service";

@Component({
  selector: 'app-sw-starships-page',
  templateUrl: './sw-starships-page.component.html',
  styleUrls: ['./sw-starships-page.component.scss']
})
export class SwStarshipsPageComponent implements OnInit {

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.swapi.getStarships().subscribe(result => console.log(result))
    this.swapi.getPeople().subscribe(people => console.log(people))

    this.swapi.getPeople(2).subscribe(people => console.log(people))
    this.swapi.getPeople(3).subscribe(people => console.log(people))

    this.swapi.getPerson(67).subscribe(person => console.log(person));
    this.swapi.getSpecificStarship(9).subscribe(ship => console.log(ship));
  }

}