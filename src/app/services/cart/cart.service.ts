import { Injectable } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';
import { Flower } from 'src/app/models/flower';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = []
  //   {
  //     flower: {
  //       id: 8,
  //       name: 'Hot Romance',
  //       imageUrl:
  //         'https://www.flowerchimp.sg/cdn/shop/files/2b_1d73ccae-f210-48dd-8bc5-52450c17a712_493x.jpg?v=1696559826',
  //       price: 100000,
  //       quantity: 100,
  //       category: 'birthday',
  //     },
  //     count: 1,
  //   },
  //   {
  //     flower: {
  //       id: 9,
  //       name: 'White Star',
  //       imageUrl:
  //         'https://www.flowerchimp.sg/cdn/shop/products/BR_A051_493x.jpg?v=1628495580',
  //       price: 80000,
  //       quantity: 30,
  //       category: 'funeral',
  //     },
  //     count: 5,
  //   },
  // ];

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

  public getAll(): Cart {
    return this.cart;
  }

  public changeCartItemQuantity(flower: Flower, count: number) {
    const cartItem: CartItem = this.cart.filter(
      (item) => item.flower.name == flower.name
    )[0];
    cartItem.count = count;
  }

  public removeCartItem(flower: Flower) {
    this.cart = this.cart.filter((item) => item.flower.name != flower.name);
  }
}
