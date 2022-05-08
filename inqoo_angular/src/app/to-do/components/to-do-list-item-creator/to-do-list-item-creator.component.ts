import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-to-do-list-item-creator',
  templateUrl: './to-do-list-item-creator.component.html',
  styleUrls: ['./to-do-list-item-creator.component.scss']
})
export class ToDoListItemCreatorComponent implements OnInit {

  @Output() onItemCreate = new EventEmitter<string>();

  itemCreator = new FormGroup({
    itemLabel: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onItemSubmit = () => {
    this.onItemCreate.emit(this.itemCreator.value.itemLabel);
    this.itemCreator.reset();
  }
}
