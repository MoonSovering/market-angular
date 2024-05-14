import { Injectable } from "@angular/core";
import { IProductCategory } from "../models/product-category.model";

@Injectable({
  providedIn: "root"
})
export class ProductCategoryMapper {
  map(payload: any[]): IProductCategory[] {
    return payload.map(item => ({
      id: item.id,
      name: item.name
    }));
  }
}
