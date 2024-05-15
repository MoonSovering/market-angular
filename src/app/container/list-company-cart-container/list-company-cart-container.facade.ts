import { Injectable } from "@angular/core";
import { AppState } from '../../core/state/app.state';
import { Observable, Subscription } from "rxjs";
import { IWaste } from "../../core/models/waste.model";

@Injectable({
  providedIn: 'root'
})
export class ListCompanyCartContainerFacade {
  private subscriptions: Subscription;
  constructor(
    private readonly AppState: AppState
  ) {}

  cartProducts$(): Observable<IWaste[]> {
    return this.AppState.cartProductsStore.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
}
