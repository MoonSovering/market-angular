import { Injectable } from "@angular/core";
import { Observable, Subscription, map, mergeMap, tap } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { StorageService } from "../../core/services/generals/storage.service";
import { FarmerService } from "../../core/services/farmer.service";
import { IProduct } from "../../core/models/interfaces/product.interface";
import { IPexelImages } from "../../core/models/interfaces/images-api.interfaces";
import { PexelApiService } from "../../core/services/pexel-api.service";
import { LoginFarmer } from "../../core/models/login-farmer.model";
import { IFarmer } from "../../core/models/product.model";


@Injectable({
  providedIn: "root"

})
export class ListProductContainerFacade {

  private subscriptions: Subscription;
  constructor(
    private readonly appState: AppState,
    private readonly storageService: StorageService,
    private readonly farmerService: FarmerService,
    private readonly pexelApiService: PexelApiService
  ) {}
  farmer$(): Observable<IFarmer> {
    return this.appState.farmer.$();
  }
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  getFarmer(): void {
    console.log(this.farmer$());
    const id: String = this.storageService.get('id');
    this.subscriptions.add(
      this.farmerService.getFarmer(id).pipe(
        mergeMap((farmer) => this.getImages(farmer.waste)),
        tap(this.appState.farmer.set.bind(this))
      ).subscribe()
    );
  }
  private getImages(products: IProduct[]): Observable<IProduct[]> {
    return this.pexelApiService.getImages(products.length.toString()).pipe(
      map((images: IPexelImages) => {
        return products.map( (company: IProduct, index) => ({
          ...company,
          photo: images.photos[index]
        }) );
      }),
    );
  }
}
