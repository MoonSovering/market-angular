import { Injectable } from "@angular/core";
import { StateFactory } from "./factory.state";
import { BehaviorSubject } from "rxjs";
import { IFarmer } from "../models/product.model";
import { IWaste } from "../models/waste.model";


@Injectable({
  providedIn: 'root'


})
export class CompanyState {
  private farmers$: BehaviorSubject<IFarmer[]> = new BehaviorSubject<IFarmer[]>(null);
  private wastes$: BehaviorSubject<IWaste[]> = new BehaviorSubject<IWaste[]>(null);
  private cartProducts$: BehaviorSubject<IWaste[]> = new BehaviorSubject<IWaste[]>(null);
  constructor(
  private readonly factory: StateFactory
  ) {}

  farmersStore() {
    return this.factory.state(this.farmers$);
  }
  wastesStore(){
    return this.factory.state(this.wastes$);
  }
  cartProductsStore(){
    return this.factory.state(this.cartProducts$);
  }

}
