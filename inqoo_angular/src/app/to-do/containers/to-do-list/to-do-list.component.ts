import {Component} from '@angular/core';
import {ToDoItem} from '../../models/to-do-item';
import {ToDoListMock} from "../../mocks/to-do-list.mock";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  list: ToDoItem[] = ToDoListMock;

  addToDoItem = (label: string) => this.list.push({
    label,
    isDone: false,
    id: this.list.length
  })

  // onItemDone = (id: number) => this.list = this.list.map(item => item.id === id ? {...item, isDone: true} : item);
  onItemDone = (id: number) => this.list[this.list.findIndex(item => item.id === id)].isDone = true;

}
