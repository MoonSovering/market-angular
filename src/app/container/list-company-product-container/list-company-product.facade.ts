import { Injectable } from "@angular/core";
import { Observable, Subscription, map, mergeMap, tap } from "rxjs";
import { IWaste } from "../../core/models/waste.model";
import { AppState } from "../../core/state/app.state";
import { CompanyService } from '../../core/services/company.service';
import { PexelApiService } from "../../core/services/pexel-api.service";


@Injectable({
  providedIn: 'root'
})
export class ListCompanyProductFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly CompanyService: CompanyService,
    private readonly pexelApiService: PexelApiService
  ) { }

  wastes$(): Observable<IWaste[]>{
    return this.appState.wastes.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
  getWastes(): void {
    this.subscriptions.add(
      this.CompanyService.getWastes().pipe(
        mergeMap((wastes) => this.getImages(wastes)),
        tap(this.appState.wastes.set.bind(this))
      ).subscribe()
    );
  }

  private getImages(wastes: IWaste[]): Observable<IWaste[]> {
    return this.pexelApiService.getImages(wastes.length.toString()).pipe(
      map((images: any) => {
        return wastes.map( (waste: IWaste, index) => ({
          ...waste,
          photo: images.photos[index]
        }) );
      })
    );
  }
}
