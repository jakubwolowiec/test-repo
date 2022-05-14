import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-inqoo-search-bar',
  templateUrl: './inqoo-search-bar.component.html',
  styleUrls: ['./inqoo-search-bar.component.scss']
})
export class InqooSearchBarComponent implements OnInit{

  @Output() onValueChange = new EventEmitter<string>();

  searchInput = new FormControl('');

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(600),
    ).subscribe(value => this.onValueChange.emit(value));
  }

}
