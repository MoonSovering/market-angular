import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWaste } from '../../../core/models/waste.model';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';

@Component({
  selector: 'app-company-list-product',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './company-list-product.component.html',
  styleUrl: './company-list-product.component.css'
})
export class CompanyListProductComponent {
  @Input() products: IWaste[];
  @Output() captureProduct: EventEmitter<IWaste[]> = new EventEmitter<IWaste[]>();

  selectProducts: IWaste[] = [];
  disabledProducts: Set<IWaste> = new Set();
  redirect: LinkedButton = {
    label: 'Ir a tu carrito de compras!',
    link: '/company/cart'
  }

    getProduct(product: IWaste) {
      this.selectProducts.push(product);
      this.captureProduct.emit(this.selectProducts);
      this.disabledProducts.add(product);
    }

    deleteProduct(product: IWaste) {
      this.selectProducts= this.selectProducts.filter((item) => item !== product);
      this.captureProduct.emit(this.selectProducts);
      this.disabledProducts.delete(product);
    }

    addDisableButton(product: IWaste): boolean {
      return this.disabledProducts.has(product);
  }

  deleteDisableButton(product: IWaste): boolean {
      return !this.disabledProducts.has(product);
  }
}
