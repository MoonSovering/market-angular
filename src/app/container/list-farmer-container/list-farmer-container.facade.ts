import { Injectable } from "@angular/core";
import { Observable, Subscription, map, mergeMap, tap } from 'rxjs';
import { IFarmer } from "../../core/models/product.model";
import { CompanyService } from "../../core/services/company.service";
import { AppState } from '../../core/state/app.state';
import { PexelApiService } from '../../core/services/pexel-api.service';
import { IPexelImages } from "../../core/models/interfaces/images-api.interfaces";


@Injectable({
  providedIn: 'root'

})
export class ListFarmerContainerFacade {
  private subscriptions: Subscription;
  constructor(
    private readonly companyService: CompanyService,
    private readonly appState: AppState,
    private readonly pexelApiService: PexelApiService
  ) { }

  farmers$(): Observable<IFarmer[]> {
    return this.appState.farmers.$();
  }
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
  getFarmers(): void {
    this.subscriptions.add(
      this.companyService.getFarmers().pipe(
        mergeMap((farmers) => this.getImages(farmers)),
        tap(this.appState.farmers.set.bind(this))
      ).subscribe()
    );
  }
  private getImages(farmers: IFarmer[]): Observable<IFarmer[]> {
    return this.pexelApiService.getImages(farmers.length.toString(), 'farmer').pipe(
      map((images: IPexelImages)=> {
        return farmers.map( (farmer: IFarmer, index) => ({
          ...farmer,
          photo: images.photos[index]
        }) );
      })
    );
  }
}

