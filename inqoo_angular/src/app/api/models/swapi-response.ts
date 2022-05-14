import { Person } from "./person-interface";
import { Starship } from "./starship-interface";

export interface SwapiResponse{
    count:number,
    next: string,
    previous:string,
    results: Person[] | Starship[]
}