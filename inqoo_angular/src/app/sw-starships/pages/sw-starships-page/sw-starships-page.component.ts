import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Person } from 'src/app/api/models/person-interface';
import { Starship } from 'src/app/api/models/starship-interface';
import {SwapiService} from "../../../api/services/swapi.service";

@Component({
  selector: 'app-sw-starships-page',
  templateUrl: './sw-starships-page.component.html',
  styleUrls: ['./sw-starships-page.component.scss']
})
export class SwStarshipsPageComponent implements OnInit {
starships: Starship[] | undefined;
  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.swapi.getStarships().pipe(map(data => data.results as Starship[]))
    .subscribe(result => this.starships = result);
  }

}