import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  checkout(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.router.navigate(['/thank-you']);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
