
import { Injectable } from "@angular/core";
import { ICompany } from "../models/company.model";
import { Contact } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyMapper {
  map(payload: any[]): ICompany[] {
    return payload.map((company: any) => ({
      companyId: company.companyId,
      name: company.name,
      contact: this.mapContacts(company.contact),
      address: company.address,
      email: company.email,
      password: company.password,
      status: company.status
    }));
  }

  private mapContacts(contacts: any[]): Contact[] {
    return contacts.map((contact: any) => ({
      contactType: contact.contactType,
      contact: contact.contact
    }));
  }
}
