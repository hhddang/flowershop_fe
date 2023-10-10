import { Component } from '@angular/core';
import { Flower } from 'src/app/models/flower';
import { FlowerService } from 'src/app/services/flower/flower.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  flowerList: Flower[] = [];

  constructor(private flowerService: FlowerService) {}

  ngOnInit() {
    this.flowerList = this.flowerService.getAll();
  }
}
