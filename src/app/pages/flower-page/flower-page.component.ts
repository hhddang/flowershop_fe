import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from 'src/app/models/flower';
import { CartService } from 'src/app/services/cart/cart.service';
import { FlowerService } from 'src/app/services/flower/flower.service';

@Component({
  selector: 'app-flower-page',
  templateUrl: './flower-page.component.html',
  styleUrls: ['./flower-page.component.scss'],
})
export class FlowerPageComponent {
  flower!: Flower;
  quantity: number = 1;

  constructor(
    private flowerService: FlowerService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['flowerId']) {
        this.flower = this.flowerService.getById(params['flowerId']);
      }
    });
  }

  public addToCart(flower: Flower, count: number) {
    this.cartService.addCartItem(flower, count);
  }

  public changeQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }
}
