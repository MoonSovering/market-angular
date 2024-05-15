import { Injectable } from "@angular/core";
import { FarmerType, ICreateFarmer } from "../models/interfaces/create-farmer.interface";
import { Contact } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CreateFarmerMapper {
  map(farmer: any): ICreateFarmer {
    return {
      userName: farmer.userName,
      email: farmer.email,
      password: farmer.password,
      lastName: farmer.lastName,
      address: farmer.address,
      contact: this.mapContacts(farmer.contact),
      type: this.mapTypes(farmer.type)
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
