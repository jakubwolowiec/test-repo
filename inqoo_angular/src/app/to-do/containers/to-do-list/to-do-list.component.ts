import {Component} from '@angular/core';
import {ToDoItem} from '../../models/to-do-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  list: ToDoItem[] = [];
  counterId: number = 0;

  addToDoItem = (label: string) => this.list.push({
    label,
    isDone: false,
    id: this.addCounterToItem()
  })

  addCounterToItem = () => {
    this.counterId = this.counterId + 1;
    return this.counterId;
  }

  // onItemDone = (id: number) => this.list = this.list.map(item => item.id === id ? {...item, isDone: true} : item);
  onItemDone = (id: number) => this.list[this.list.findIndex(item => item.id === id)].isDone = true;
  onItemDelete = (id: number) => {
    this.list = this.list.filter(item => item.id !== id);
    // this.list = this.list.map((item, index) => ({...item, id: index}));
  }

}
