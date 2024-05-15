import { Component, Input } from '@angular/core';
import { IFarmer } from '../../../core/models/product.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-farmer',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './list-farmer.component.html',
  styleUrl: './list-farmer.component.css'
})
export class ListFarmerComponent {
  @Input() farmers: IFarmer[];
}
