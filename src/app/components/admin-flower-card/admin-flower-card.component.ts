import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flower } from 'src/app/models/flower';
import { FlowerService } from 'src/app/services/flower/flower.service';

@Component({
  selector: 'app-admin-flower-card',
  templateUrl: './admin-flower-card.component.html',
  styleUrls: ['./admin-flower-card.component.scss'],
})
export class AdminFlowerCardComponent {
  @Input()
  flower!: Flower;

  @Output()
  updateFlower = new EventEmitter();

  constructor(private flowerService: FlowerService) {}

  public importFlower(flower: Flower, quantity: number) {
    this.flowerService.update(flower.id, {
      ...flower,
      quantity: flower.quantity + quantity,
    });
    this.updateFlower.emit();
  }

  public editFlower(flower: Flower) {
    this.flowerService.update(flower.id, { ...flower, name: 'Edited' });
    this.updateFlower.emit();
  }

  public removeFlower(flowerId: number) {
    this.flowerService.remove(flowerId);
    this.updateFlower.emit();
  }
}
