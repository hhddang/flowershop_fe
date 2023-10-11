import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-box',
  templateUrl: './quantity-box.component.html',
  styleUrls: ['./quantity-box.component.scss'],
})
export class QuantityBoxComponent {
  @Input()
  quantity: number = 1;

  @Output()
  onChangeQuantity: EventEmitter<number> = new EventEmitter<number>();

  public decreaseQuantity() {
    if (this.quantity == 1) {
      return;
    }
    this.quantity = this.quantity - 1;
    this.onChangeQuantity.emit(this.quantity);
  }

  public increaseQuantity() {
    this.quantity = this.quantity + 1;
    this.onChangeQuantity.emit(this.quantity);
  }

  public changeInput(event: any) {
    const quantity: number = Number(event.target.value);
    if (quantity <= 0) {
      this.quantity = 1;
      return;
    }
    this.quantity = quantity;
    this.onChangeQuantity.emit(this.quantity);
  }
}
