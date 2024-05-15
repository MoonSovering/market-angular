import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { URL_RESOURCES } from '../resources/url.resource';
import { IFarmer } from '../models/product.model';
import { FarmersMapper } from '../mappers/farmers.mapper';
import { map } from 'rxjs';
import { WasteMapper } from '../mappers/waste.mapper';
import { IWaste } from '../models/waste.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private readonly httpService: HttpService,
    private readonly farmersMapper: FarmersMapper,
    private readonly wasteMapper:  WasteMapper
  ) { }

  getFarmers() {
    const url = URL_RESOURCES.getAllFarmers;
    return this.httpService.get<IFarmer[]>(url)
    .pipe(
      map((result) => this.farmersMapper.map(result))
    )
  }

  getWastes() {
    const url = URL_RESOURCES.getAllWaste;
    return this.httpService.get<IWaste[]>(url)
    .pipe(
      map((result) => this.wasteMapper.map(result))
    )
  }
}
