import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { FoodService } from '../../services/food/food-service';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags implements OnInit {
  @Input()  // Use @Input to allow passing tags from parent component
  foodPageTags?:string[];
  tags?: Tag[];

  @Input() // Use @Input to allow passing tags from parent component
  justifyContent: string = 'center';


  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) {
    this.tags = this.foodService.getAllTags();
  }
}
}