import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchTerm = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // This will set the search term in the box if it's already in the URL
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  // This method now navigates to the search URL when the button is clicked
  doSearch(): void {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
  }

}
