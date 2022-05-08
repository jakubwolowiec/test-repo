import { Component, OnInit } from '@angular/core';
import { ToDoListMock } from '../../mocks/to-do-list-mock';
import { ToDoItem } from '../../models/to-do-item';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  list: ToDoItem[] = ToDoListMock;
  constructor() { }

  ngOnInit(): void {
    
  }

}
