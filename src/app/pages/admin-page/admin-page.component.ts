import { Component } from '@angular/core';
import { Flower } from 'src/app/models/flower';
import { FlowerService } from 'src/app/services/flower/flower.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  flowerList!: Flower[];

  constructor(private flowerService: FlowerService) {}

  ngOnInit() {
    this.getFlowerList();
  }

  private getFlowerList() {
    this.flowerService
      .getAll()
      .subscribe((flowerList) => (this.flowerList = flowerList));
  }

  public addFlower(flower: Flower) {
    this.flowerService.create(flower).subscribe((response) => {
      if (response.success) {
        alert('Add flower success');
        this.getFlowerList();
      }
    });
  }

  public onUpdateFlower() {
    this.getFlowerList();
  }

  // Example

  public exAddFlower() {
    this.addFlower({
      flowerId: 0,
      name: 'New',
      imageUrl: 'image url',
      price: 1000,
      quantity: 10,
      category: 'love',
    });
  }
}
