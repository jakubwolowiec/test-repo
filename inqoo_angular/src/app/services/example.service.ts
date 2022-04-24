import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private myFavouriteColor = 'green';

  testMe = () => {console.log("Działam ", this.myFavouriteColor);}
  setFavouriteColor = ( color: string) => {this.myFavouriteColor = color;}
  constructor() { }

}
