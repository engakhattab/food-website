import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  @Output()
  searchTextChanged = new EventEmitter<string>();

  // This method is called every time the text in the input box changes.
  doSearch(searchTerm: string) {
    this.searchTextChanged.emit(searchTerm);
  }

}
