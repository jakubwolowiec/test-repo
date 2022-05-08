import {Component} from '@angular/core';
import {RoutesConfig} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inqoo_angular';

  routes: { label: string, route: string }[] = [
    {
      label: 'Home',
      route: RoutesConfig.home
    }, {
      label: 'Starships',
      route: RoutesConfig.swStarships
    }, {
      label: 'People',
      route: RoutesConfig.swPeople
    }, {
      label: 'Components',
      route: RoutesConfig.components
    },
    {
      label: 'To-do List',
      route: RoutesConfig.toDoList
    }
  ];
}

