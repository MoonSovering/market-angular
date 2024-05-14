import { Injectable } from "@angular/core";
import { IProductCreateResponse } from "../models/interfaces/product-create-response.interface";

@Injectable({
  providedIn: "root"
})
export class ProductCreateResponseMapper {
  map(payload: any): IProductCreateResponse {
    return {
      id: payload.id,
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
      category_id: payload.category_id
    }
  }
}
