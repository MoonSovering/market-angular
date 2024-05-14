import { Injectable } from "@angular/core";
import { IFarmer } from "../models/product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from './factory.state';
import { ICompany } from "../models/company.model";
import { LoginFarmer } from "../models/login-farmer.model";



@Injectable({
  providedIn: 'root'

})
export class FarmerState {
  private farmer$: BehaviorSubject<IFarmer> = new BehaviorSubject<IFarmer>(null);
  private companies$: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>(null);
  constructor( private readonly factory: StateFactory ) { }

  farmerStore() {
    return this.factory.state(this.farmer$);
  }
  companiesStore(){
    return this.factory.state(this.companies$);
  }
}
