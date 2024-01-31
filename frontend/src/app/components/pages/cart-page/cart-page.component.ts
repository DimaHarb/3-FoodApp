import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {
      
  }

  removeFromCart(cartitem: CartItem){
    this.cartService.removeFromCart(cartitem.food.id)
  }

  changeQuantity(cartitem: CartItem, quantityString:string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartitem.food.id, quantity);
  }

}
