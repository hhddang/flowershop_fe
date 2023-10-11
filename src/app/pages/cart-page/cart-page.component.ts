import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Flower } from 'src/app/models/flower';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cart: Cart = [];
  selectedDate: Date = new Date();
  subtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getAll();
    this.subtotal = this.getSubtotal();
  }

  private getSubtotal(): number {
    return this.cart.reduce(
      (prev, curr) => prev + curr.count * curr.flower.price,
      0
    );
  }

  public changeQuantity(flower: Flower, quantity: number) {
    this.cartService.changeCartItemQuantity(flower, quantity);
    this.cart = this.cartService.getAll();
    this.subtotal = this.getSubtotal();
  }

  public removeCartItem(flower: Flower) {
    this.cartService.removeCartItem(flower);
    this.cart = this.cartService.getAll();
    this.subtotal = this.getSubtotal();
  }
}
