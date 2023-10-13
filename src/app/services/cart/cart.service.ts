import { Injectable } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';
import { Flower } from 'src/app/models/flower';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private isExisted(flower: Flower): Boolean {
    const cart = this.getAll();
    if (cart.filter((item) => item.flower.name == flower.name).length) {
      return true;
    }
    return false;
  }

  private writeCartToLocalStorage(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  public addCartItem(flower: Flower, count: number) {
    const cart = this.getAll();
    if (this.isExisted(flower)) {
      const cartItem = cart.filter(
        (item) => item.flower.name == flower.name
      )[0];
      cartItem.count += count;
    } else {
      const newCartItem: CartItem = {
        flower,
        count,
      };
      cart.push(newCartItem);
    }
    this.writeCartToLocalStorage(cart);
  }

  public getAll(): Cart {
    var stringCart = localStorage.getItem('cart')?.toString() || '[]';
    const cart = <Cart>JSON.parse(stringCart);
    console.log(stringCart, cart);
    return cart;
  }

  public changeCartItemQuantity(flower: Flower, count: number) {
    const cart = this.getAll();
    const cartItem = cart.filter((item) => item.flower.name == flower.name)[0];
    cartItem.count = count;
    this.writeCartToLocalStorage(cart);
  }

  public removeCartItem(flower: Flower) {
    const cart = this.getAll();
    const newCart = cart.filter((item) => item.flower.name != flower.name);
    this.writeCartToLocalStorage(newCart);
  }
}
