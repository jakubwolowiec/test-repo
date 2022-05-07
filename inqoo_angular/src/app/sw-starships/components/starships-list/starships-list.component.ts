import { Component, OnInit } from '@angular/core';
import {Starship} from "../../../api/models/starship";
import {SwapiService} from "../../../api/services/swapi.service";
import {delay, map} from "rxjs";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {
  starshipsBase: Starship[] = [];
  starships: Starship[] = [];
  isLoading: boolean = true;

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {

    this.swapi.getStarships().pipe(
      delay(1000),
      map(data => data.results as Starship[])
    ).subscribe(result => {
      this.starships = result;
      this.starshipsBase = this.starships;
      this.isLoading = false;
    });
  }

  onSearchChange = (searchTerm: string) => {
    if(searchTerm != null){
      searchTerm = searchTerm.toLowerCase();
    
    this.starships = this.starshipsBase.filter(ship => ship.name.includes(searchTerm))
    }
    else{this.starships = [...this.starshipsBase];}
  }
  }

