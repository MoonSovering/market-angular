import { Injectable } from "@angular/core";
import { ICreateProduct } from "../models/interfaces/create-product.interface";

@Injectable({
  providedIn: "root"
})
export class CreateProductMapper {
  map(payload: any): ICreateProduct {
    return {
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
      category_id: payload.category_id
    }
  }
}
