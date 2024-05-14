import { Injectable } from "@angular/core";
import { ICreateWaste } from "../models/interfaces/create-waste.interface";

@Injectable({
  providedIn: "root"
})
export class CreateWasteMapper {
  map(payload: any): ICreateWaste {
    return {
      idFarmer: payload.farmer_id,
      idProduct: payload.product_id
    }
  }
}
