import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SwStarshipsPageComponent} from "./sw-starships/pages/sw-starships-page/sw-starships-page.component";
import {SwPeoplePageComponent} from "./sw-people/pages/sw-people-page/sw-people-page.component";
import {NotFoundPageComponent} from "./page-not-found/pages/not-found-page/not-found-page.component";
import {HomePageComponent} from "./home/pages/home-page/home-page.component";
import {
  ComponentsShowroomPageComponent
} from "./shared/pages/components-showroom-page/components-showroom-page.component";
import {ToDoPageComponent} from "./to-do/pages/to-do-page/to-do-page.component";

export const enum RoutesConfig{
  home= 'home',
  swStarships = 'sw-starships',
  swPeople = 'sw-people',
  components = 'components',
  toDo = 'to-do'
}

const routes: Routes = [
  {path: RoutesConfig.home, component: HomePageComponent},
  {path: RoutesConfig.swStarships, component: SwStarshipsPageComponent},
  {path: RoutesConfig.swPeople, component: SwPeoplePageComponent},
  {path: RoutesConfig.components, component: ComponentsShowroomPageComponent},
  {path: RoutesConfig.toDo, component: ToDoPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
