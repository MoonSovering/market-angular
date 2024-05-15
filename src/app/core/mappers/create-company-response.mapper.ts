import { Injectable } from "@angular/core";
import { ICreateCompanyResponse } from "../models/interfaces/create-company-response.interface";
import { Contact } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyResponseMapper {
  map(company: any): ICreateCompanyResponse {
    return {
      companyId: company.companyId,
      name: company.name,
      contact: this.mapContacts(company.contact),
      address: company.address,
      email: company.email,
      password: company.password,
      status: company.status
    };
  }

  private mapContacts(contacts: any[]): Contact[] {
    return contacts.map((contact: any) => ({
      contactType: contact.contactType,
      contact: contact.contact
    }));
  }
}
