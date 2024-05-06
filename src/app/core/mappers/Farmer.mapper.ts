import { Injectable, Type } from "@angular/core";
import { Contact, FarmTpe, IFarmer, Waste } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class FarmerMapper {
  map(payload: any): IFarmer {
    return payload.map((farmer: any) => ({
      farmerId: farmer.farmerId,
      farmerName: farmer.farmerName,
      email: farmer.email,
      password: farmer.password,
      lastName: farmer.lastName,
      address: farmer.address,
      contact: this.mapContacts(farmer.contact),
      type: this.mapTypes(farmer.type),
      waste: this.mapWastes(farmer.waste),
      status: farmer.status,
      photo: farmer.photo
    }));
  }

  private mapContacts(contacts: any[]): Contact[] {
    return contacts.map((contact: any) => ({
      contactType: contact.contactType,
      contact: contact.contact
    }));
  }

  private mapTypes(types: any[]): FarmTpe[] {
    return types.map((type: any) => ({
      typeFarm: type.typeFarm,
      farm: type.farm
    }));
  }

  private mapWastes(wastes: any[]): Waste[] {
    return wastes.map((waste: any) => ({
      name: waste.name,
      category: waste.category,
      price: waste.price,
      amount: waste.amount
    }));
  }
}
