import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../shared/models/CartItem';
import { CartService } from '../../services/cart/cart';
import { Cart } from '../../shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService) { 
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
