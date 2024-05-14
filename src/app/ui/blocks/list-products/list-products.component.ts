import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/waste.model';
import { IFarmer } from '../../../core/models/product.model';
import { JsonPipe } from '@angular/common';
import { LoginFarmer } from '../../../core/models/login-farmer.model';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  @Input() farmer: any[];

  constructor(

  ) {}
}
