import { Component, OnInit } from '@angular/core';
import {Starship} from "../../../api/models/starship";
import {SwapiService} from "../../../api/services/swapi.service";
import {delay, map} from "rxjs";

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships: Starship[] = [];
  isLoading: boolean = true;

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.swapi.getStarships().pipe(
      delay(1000),
      map(data => data.results as Starship[])
    ).subscribe(result => {
      this.starships = result;
      this.isLoading = false;
    });
  }

}
