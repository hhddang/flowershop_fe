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
    this.flowerList = this.flowerService.getAll();
  }

  updateFlower() {
    this.flowerList = this.flowerService.getAll();
  }
}
