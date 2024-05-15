import { Injectable } from "@angular/core";
import { ICreateFarmerResponse } from "../models/interfaces/create-farmer-response.interface";
import { FarmerType } from "../models/interfaces/create-farmer.interface";
import { Contact } from "../models/product.model";


@Injectable({
  providedIn: 'root'
})
export class FarmerResponseMapper {
  map(farmer: any): ICreateFarmerResponse {
    return {
      farmerId: farmer.farmerId,
      farmerName: farmer.farmerName,
      email: farmer.email,
      password: farmer.password,
      lastName: farmer.lastName,
      address: farmer.address,
      contact: this.mapContacts(farmer.contact),
      type: this.mapTypes(farmer.type),
      status: farmer.status
    };
  }

  private mapContacts(contacts: any[]): Contact[] {
    return contacts.map((contact: any) => ({
      contactType: contact.contactType,
      contact: contact.contact
    }));
  }

  private mapTypes(types: any[]): FarmerType[] {
    return types.map((type: any) => ({
      typeFarm: type.typeFarm,
      farm: type.farm
    }));
  }
}
