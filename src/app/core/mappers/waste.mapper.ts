import { Injectable } from "@angular/core";
import { Farmer, IWaste, Product } from "../models/waste.model";


@Injectable({
  providedIn: 'root'
})
export class WasteMapper {
  map(wastes: any[]): IWaste[] {
    return wastes.map(waste => ({
      wasteId: waste.wasteId,
      farmer: this.mapFarmer(waste.farmer),
      product: this.mapProduct(waste.product)
    }));
  }

  private mapFarmer(farmer: any): Farmer {
    return {
      name: farmer.name,
      farm: farmer.farm,
      farmType: farmer.farmType
    };
  }

  private mapProduct(product: any): Product {
    return {
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category
    };
  }
}
