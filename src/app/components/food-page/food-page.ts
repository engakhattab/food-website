import { Component } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food/food-service';
import { CartService } from '../../services/cart/cart';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.html',
  styleUrl: './food-page.css'
})
export class FoodPage {

  food!:Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService, 
    private cartService:CartService,
    private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    })
   }
    ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}

