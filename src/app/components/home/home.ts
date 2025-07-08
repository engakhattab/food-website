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
 ngOnInit(): void {
    // This single subscription handles all filtering logic based on the URL
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        // Filter by search term
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      } else if (params['tag']) {
        // Filter by tag
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      }
      else {
        // No filter, show all foods
        this.foods = this.foodService.getAll();
      }
    });
  }
  }
