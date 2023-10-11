import { Flower } from './flower';

export type CartItem = {
  flower: Flower;
  count: number;
};

export type Cart = CartItem[];
