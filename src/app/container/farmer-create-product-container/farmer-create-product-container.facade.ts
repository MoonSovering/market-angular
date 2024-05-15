import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { PexelApiService } from "../../core/services/pexel-api.service";
import { IProductCategory } from "../../core/models/product-category.model";
import { IProductCreateResponse } from "../../core/models/interfaces/product-create-response.interface";
import { FarmerService } from "../../core/services/farmer.service";
import { ICreateProduct } from "../../core/models/interfaces/create-product.interface";
import { StorageService } from "../../core/services/generals/storage.service";


@Injectable({
  providedIn: 'root'
})
export class FarmerCreateProductFacade {
  private subscriptions: Subscription;


  constructor(
    private readonly appstate: AppState,
    private readonly pexelApiService: PexelApiService,
    private readonly farmerService: FarmerService,
    private readonly storageService: StorageService
  ){}
  categories$(): Observable<IProductCategory[]> {
    return this.appstate.categories.$();
  }
  products$(): Observable<IProductCreateResponse> {
    return this.appstate.product.$();
  }

  initSubscriptions() {
    this.subscriptions = new Subscription();
  }

  destroySubscription() {
    this.subscriptions.unsubscribe();
  }

  getProductImage(): void {
    this.appstate.product.$().pipe(
      tap((product) => {
        this.pexelApiService.getImages('1', 'plantas').subscribe((result) => {
          this.appstate.product.set({...product, photo: {url: result.photos[0].url, alt: result.photos[0].alt} });
        });
      })
    )
  }
  getCategories(): void {{
    this.subscriptions.add(
      this.farmerService.getCategories().pipe(
        tap(this.appstate.categories.set.bind(this))
      ).subscribe()
    );
  }}

  createWaste(data: ICreateProduct): void {
    this.subscriptions.add(
      this.farmerService.postWaste(data).pipe(
        tap(this.appstate.product.set.bind(this))
      ).subscribe()
    );
  }

  postProduct(formData: ICreateProduct): void {
    const id: string = this.storageService.get('id');
    const data: ICreateProduct = {...formData, farmer_id: id};
    this.subscriptions.add(
      this.farmerService.postProduct(formData).pipe(
        tap((result) => {
          const productId = result.id;
          this.createWaste({ ...data, product_id: productId });
        })
      ).subscribe()
    );
  }
}
