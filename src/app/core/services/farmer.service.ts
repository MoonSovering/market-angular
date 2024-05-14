import { Injectable } from '@angular/core';
import { FarmerMapper } from '../mappers/Farmer.mapper';
import { HttpService } from './generals/http.service';
import { map } from 'rxjs';
import { IFarmer } from '../models/product.model';
import { URL_RESOURCES } from '../resources/url.resource';
import { ICompany } from '../models/company.model';
import { ICreateProduct } from '../models/interfaces/create-product.interface';
import { LoginFarmerMapper } from '../mappers/login-farmer.mapper';
import { CompanyMapper } from '../mappers/company.mapper';
import { LoginFarmer } from '../models/login-farmer.model';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(
    private readonly httpService: HttpService,
    private readonly getFarmerMapper: FarmerMapper,
    private readonly companyMapper: CompanyMapper
  ) { }

  loginFarmer() {
    const url = URL_RESOURCES.getAllFarmer;
    return this.httpService.get<IFarmer>(url)
    .pipe(
      map((result) => this.getFarmerMapper.map(result))
    )
  }
  getCompany() {
    const url = URL_RESOURCES.getAllCompany;
    return this.httpService.get<ICompany[]>(url)
    .pipe(
      map((result) => this.companyMapper.map(result))
    )
  }
  postProduct(createDate: ICreateProduct) {
    const url = URL_RESOURCES.postProduct;
    return this.httpService.post(url, createDate);
  }

  getFarmer(id: String){
    const url = URL_RESOURCES.getOneFarmer;
    return this.httpService.get<IFarmer>(url+`/${id}`).pipe(
      map((result) => this.getFarmerMapper.map(result))
    );
  }
}
