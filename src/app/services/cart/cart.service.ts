import { Injectable } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';
import { Flower } from 'src/app/models/flower';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = [];

  constructor() {}

  public isExisted(flower: Flower): Boolean {
    if (this.cart.filter((item) => item.flower.name == flower.name).length) {
      return true;
    }
    return false;
  }

  public addCartItem(flower: Flower, count: number) {
    if (this.isExisted(flower)) {
      const cartItem: CartItem = this.cart.filter(
        (item) => item.flower.name == flower.name
      )[0];
      cartItem.count += count;
    } else {
      const newCartItem: CartItem = {
        flower,
        count,
      };
      this.cart.push(newCartItem);
    }
  }
}
