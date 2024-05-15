import { Observable, Subscription, map, mergeMap, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { Injectable } from '@angular/core';
import { PexelApiService } from '../../core/services/pexel-api.service';
import { FarmerService } from '../../core/services/farmer.service';
import { ICompany } from '../../core/models/company.model';
import { IPexelImages } from '../../core/models/interfaces/images-api.interfaces';



@Injectable({
  providedIn: 'root'
})
export class ListCompaniesFacade{
  private subscriptions: Subscription;

  constructor(
    private readonly farmerService: FarmerService,
    private readonly appState: AppState,
    private readonly pexelApiService: PexelApiService,
  ){}
  companies$(): Observable<ICompany[]> {
    return this.appState.companies.$();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }
  getCompanies(): void{
    this.subscriptions.add(
      this.farmerService.getCompany().pipe(
        mergeMap((companies) => this.getImages(companies) ),
        tap(this.appState.companies.set.bind(this))
      ).subscribe()
    );
  }
  private getImages(companies: ICompany[]): Observable<ICompany[]> {
    return this.pexelApiService.getImages(companies.length.toString(), 'logo').pipe(
      map((images: IPexelImages) => {
        return companies.map( (company: ICompany, index) => ({
          ...company,
          photo: images.photos[index]
        }) );
      }),
    );
  }
}
