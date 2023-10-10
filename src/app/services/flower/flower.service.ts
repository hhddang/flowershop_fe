import { Injectable } from '@angular/core';
import { Flower } from 'src/app/models/flower';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  constructor() {}

  public getAll(): Flower[] {
    return [
      {
        id: 8,
        name: 'Hot Romance',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/files/2b_1d73ccae-f210-48dd-8bc5-52450c17a712_493x.jpg?v=1696559826',
        price: 100000,
        quantity: 100,
        category: 'birthday',
      },
      {
        id: 9,
        name: 'White Star',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/products/BR_A051_493x.jpg?v=1628495580',
        price: 80000,
        quantity: 30,
        category: 'funeral',
      },
      {
        id: 10,
        name: 'Sweet Pea',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/files/1b_b2e96ffa-a89b-486d-acf4-4381c894e5db_493x.jpg?v=1696559661',
        price: 90000,
        quantity: 50,
        category: 'love',
      },
      {
        id: 11,
        name: 'Olympia',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/products/BR_05_1_1_493x.jpg?v=1633922923',
        price: 65000,
        quantity: 20,
        category: 'funeral',
      },
      {
        id: 12,
        name: 'Solara',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/products/2a_1_493x.jpg?v=1660550707',
        price: 55000,
        quantity: 50,
        category: 'birthday',
      },
      {
        id: 13,
        name: 'Luna',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/products/Luna-01_493x.jpg?v=1610681675',
        price: 85000,
        quantity: 40,
        category: 'birthday',
      },
      {
        id: 14,
        name: 'One in a Million',
        imageUrl:
          'https://www.flowerchimp.sg/cdn/shop/products/0620-OneInAMillion-Thumbnail-01_493x.jpg?v=1592531643',
        price: 105000,
        quantity: 20,
        category: 'anniversary',
      },
    ];
  }
}
