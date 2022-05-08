import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';
import { ToDoListComponent } from './containers/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ToDoListItemCreatorComponent } from './components/to-do-list-item-creator/to-do-list-item-creator.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ToDoPageComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoListItemCreatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ToDoModule { }
