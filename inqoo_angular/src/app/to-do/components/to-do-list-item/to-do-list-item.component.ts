import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItem} from "../../models/to-do-item";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {

  @Input() item: ToDoItem | undefined;
  @Output() onDoneClick = new EventEmitter<number>();
  @Output() onDeleteClick = new EventEmitter<number>();

  doneClick = () => this.onDoneClick.emit(this.item?.id);
  deleteClick = () => this.onDeleteClick.emit(this.item?.id);

}
