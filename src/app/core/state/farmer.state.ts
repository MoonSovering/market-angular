import { Injectable } from "@angular/core";
import { IFarmer } from "../models/product.model";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from './factory.state';



@Injectable({
  providedIn: 'root'

})
export class FarmerState {
  private farmer$: BehaviorSubject<IFarmer> = new BehaviorSubject<IFarmer>(null);
  constructor( private readonly factory: StateFactory ) { }

  farmerStore() {
    return this.factory.state(this.farmer$);
  }
}
