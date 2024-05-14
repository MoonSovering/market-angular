import { Component } from '@angular/core';
import { ListProductsComponent } from '../../ui/blocks/list-products/list-products.component';
import { ListProductContainerFacade } from './list-product-container.facade';
import { Observable } from 'rxjs';
import { IFarmer } from '../../core/models/product.model';
import { AsyncPipe } from '@angular/common';
import { LoginFarmer } from '../../core/models/login-farmer.model';

@Component({
  selector: 'app-list-products-container',
  standalone: true,
  imports: [ListProductsComponent, AsyncPipe],
  templateUrl: './list-products-container.component.html'
})
export class ListProductsContainerComponent {
  constructor(
    private readonly facade: ListProductContainerFacade
  ) { }

  farmer$: Observable<any>;
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getFarmer();
    this.initializeSubscriptions();
  }

  getFarmer(): void {
    this.facade.getFarmer();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  private initializeSubscriptions(): void {
    this.farmer$ = this.facade.farmer$();
  }
}
