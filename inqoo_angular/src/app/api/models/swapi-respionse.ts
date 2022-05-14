import {Person} from "./person";
import {Starship} from "./starship";

export interface SwapiRespionse{
  count: number,
  next: string,
  previous: string,
  results: Person[] | Starship[]
}
