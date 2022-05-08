import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-to-do-list-item-creator',
  templateUrl: './to-do-list-item-creator.component.html',
  styleUrls: ['./to-do-list-item-creator.component.scss']
})
export class ToDoListItemCreatorComponent {

  @Output() onItemCreate = new EventEmitter<string>();

  itemCreator = new FormGroup({
    itemLabel: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z\\s]*$')
    ])
  });

  
  onItemSubmit = () => {
    console.log(this.itemCreator)
    if(this.itemCreator.valid) {
      this.onItemCreate.emit(this.itemCreator.value.itemLabel);
      this.itemCreator.reset();
    }
  }
}
