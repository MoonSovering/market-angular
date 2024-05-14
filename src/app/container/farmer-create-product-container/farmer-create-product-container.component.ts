import { Component, Input } from '@angular/core';
import { CreateProductComponent } from '../../ui/blocks/create-product/create-product.component';
import { ICreateProduct } from '../../core/models/interfaces/create-product.interface';
import { Observable } from 'rxjs';
import { IProductCategory } from '../../core/models/product-category.model';
import { FarmerCreateProductFacade } from './farmer-create-product-container.facade';
import { AsyncPipe } from '@angular/common';
import { IProductCreateResponse } from '../../core/models/interfaces/product-create-response.interface';

@Component({
  selector: 'app-farmer-create-product-container',
  standalone: true,
  imports: [CreateProductComponent, AsyncPipe],
  templateUrl: './farmer-create-product-container.component.html'
})
export class FarmerCreateProductContainerComponent {

  @Input() productData: ICreateProduct;
  categories$: Observable<IProductCategory[]>;
  product$: Observable<IProductCreateResponse>;

  constructor(
    private readonly facade: FarmerCreateProductFacade
  ) { }
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getCategories();
    this.initalizeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  getCategories(): void {
    this.facade.getCategories();
  }
  postProduct(productData: ICreateProduct) {
    this.facade.postProduct(productData);
  }
  private initalizeSubscriptions (): void {
    this.categories$ = this.facade.categories$();
  }
}
