import { Injectable } from "@angular/core";
import { ICreateCompany } from "../models/interfaces/create-company.interface";
import { Contact } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CreateCompanyMapper {
  map(company: any): ICreateCompany {
    return {
      name: company.name,
      contact: this.mapContacts(company.contact),
      address: company.address,
      email: company.email,
      password: company.password
    };
  }

  private mapContacts(contacts: any[]): Contact[] {
    return contacts.map((contact: any) => ({
      contactType: contact.contactType,
      contact: contact.contact
    }));
  }
}
