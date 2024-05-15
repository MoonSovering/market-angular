import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IWaste } from '../../core/models/waste.model';
import { ListCompanyCartContainerFacade } from './list-company-cart-container.facade';
import { ListCompanyCartComponent } from '../../ui/blocks/list-company-cart/list-company-cart.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-company-cart-container',
  standalone: true,
  imports: [ListCompanyCartComponent, AsyncPipe],
  templateUrl: './list-company-cart-container.component.html'
})
export class ListCompanyCartContainerComponent {
  cartProducts$: Observable<IWaste[]>;
  constructor(
    private readonly facade: ListCompanyCartContainerFacade
  ) { }

  ngOnInit(): void {
    this.initializeSubscription();
    this.facade.initSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  private initializeSubscription(): void {
    this.cartProducts$ = this.facade.cartProducts$();
  }
}
