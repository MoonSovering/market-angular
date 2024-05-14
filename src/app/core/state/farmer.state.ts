import { Injectable } from "@angular/core";
import { IFarmer } from "../models/product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from './factory.state';
import { ICompany } from "../models/company.model";
import { IProductCategory } from "../models/product-category.model";
import { IProductCreateResponse } from "../models/interfaces/product-create-response.interface";



@Injectable({
  providedIn: 'root'

})
export class FarmerState {
  private farmer$: BehaviorSubject<IFarmer> = new BehaviorSubject<IFarmer>(null);
  private companies$: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>(null);
  private categories$: BehaviorSubject<IProductCategory[]> = new BehaviorSubject<IProductCategory[]>(null);
  private product$: BehaviorSubject<IProductCreateResponse> = new BehaviorSubject<IProductCreateResponse>(null);
  private
  constructor( private readonly factory: StateFactory ) { }

  farmerStore() {
    return this.factory.state(this.farmer$);
  }
  companiesStore(){
    return this.factory.state(this.companies$);
  }
  categoriesStore(){
    return this.factory.state(this.categories$);
  }
  productStore(){
    return this.factory.state(this.product$);
  }
}
