import { Component, Input } from '@angular/core';
import { Flower } from 'src/app/models/flower';

@Component({
  selector: 'app-flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss'],
})
export class FlowerCardComponent {
  @Input()
  flower!: Flower;
}
