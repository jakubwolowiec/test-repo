import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SwapiRespionse} from "../models/swapi-respionse";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {}

  getPeople = (page: number = 1) => this.http.get(`${environment.swapiBaseUrl}/people/?page=${page}`);
  getPerson = (id: number) => this.http.get(`${environment.swapiBaseUrl}/people/${id}`);

  getStarships = (page: number = 1): Observable<SwapiRespionse> =>
    this.http.get<SwapiRespionse>(`${environment.swapiBaseUrl}/starships/?page=${page}`);

  getSpecificStarship = (id: number) => this.http.get(`${environment.swapiBaseUrl}/starships/${id}`);
}
