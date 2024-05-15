import { Component } from '@angular/core';
import { CompanyListProductComponent } from '../../ui/blocks/company-list-product/company-list-product.component';
import { ListCompanyProductFacade } from './list-company-product.facade';
import { Observable } from 'rxjs';
import { IWaste } from '../../core/models/waste.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-company-product-container',
  standalone: true,
  imports: [CompanyListProductComponent, AsyncPipe],
  templateUrl: './list-company-product-container.component.html'
})
export class ListCompanyProductContainerComponent {
  constructor(
    private readonly facade: ListCompanyProductFacade,
  ) { }

  wastes$: Observable<IWaste[]>;

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getWastes();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getWastes(): void {
    this.facade.getWastes();
  }

  private initializeSubscriptions(): void {
    this.wastes$ = this.facade.wastes$();
  }
}
