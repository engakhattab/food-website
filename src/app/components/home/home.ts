import { Component } from '@angular/core';
import { FoodService } from '../../services/food/food-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  foods:string[] =[];
  constructor(private foodService: FoodService) { }
  ngOnInit() : void {
    this.foods = this.foodService.getAll();
  }

}
