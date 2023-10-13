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
    this.flowerService
      .update(flower.flowerId, {
        ...flower,
        quantity: flower.quantity + quantity,
      })
      .subscribe((response) => {
        if (response.success) {
          this.updateFlower.emit();
        }
      });
  }

  // public editFlower(flower: Flower) {
  //   this.flowerService.update(flowerId, flower).subscribe((response) => {
  //     if (response.success) {
  //       console.log('Update flower success: name = ', flower.name);
  //       this.getFlowerList();
  //     }
  //   });
  // }

  // public deleteFlower(flowerId: number) {
  //   this.flowerService.delete(flowerId).subscribe((response) => {
  //     if (response.success) {
  //       console.log('Delete flower success: id = ', flowerId);
  //       this.getFlowerList();
  //     }
  //   });
  // }
  public editFlower(flower: Flower) {
    this.flowerService
      .update(flower.flowerId, { ...flower, name: 'Edited' })
      .subscribe((response) => {
        if (response.success) {
          this.updateFlower.emit();
        }
      });
  }

  public removeFlower(flowerId: number) {
    this.flowerService.delete(flowerId).subscribe((response) => {
      if (response.success) {
        this.updateFlower.emit();
      }
    });
  }
}
