import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food-service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  allFoods: Food[] = [];
  foods:Food[] =[];
  constructor(private foodService: FoodService, private route:ActivatedRoute) { }
  ngOnInit() : void {
    this.allFoods = this.foodService.getAll();
    this.foods = this.allFoods;
  }
   handleSearch(searchTerm: string) {
    if (searchTerm) {
      // Filter the original list and update the displayed list.
      this.foods = this.allFoods.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // If the search box is empty, show all foods again.
      this.foods = this.allFoods;
    }
  }

}
