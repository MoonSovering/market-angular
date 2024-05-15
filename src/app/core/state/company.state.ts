import { Injectable } from "@angular/core";
import { StateFactory } from "./factory.state";
import { BehaviorSubject } from "rxjs";
import { IFarmer } from "../models/product.model";


@Injectable({
  providedIn: 'root'


})
export class CompanyState {
  private farmers$: BehaviorSubject<IFarmer[]> = new BehaviorSubject<IFarmer[]>(null);
  constructor(
  private readonly factory: StateFactory
  ) {}

  farmersStore() {
    return this.factory.state(this.farmers$);
  }

}
