import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { Observable, map, tap } from 'rxjs';
import { IPexelImages } from '../models/interfaces/images-api.interfaces';
import { HttpHeaders } from '@angular/common/http';
import { GetPexelMapper } from '../mappers/pexel-api.mapper';
import { environment } from '../../../environments/environment.develoment';
import { URL_RESOURCES } from '../resources/url.resource';

@Injectable({
  providedIn: 'root'
})
export class PexelApiService {

  constructor(
    private readonly httpService: HttpService,
    private readonly getPexelMapper: GetPexelMapper
  ) { }

  getImages(page: string, query: string): Observable<IPexelImages>{
    const header = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Authorization', `${environment.pexelApiKey}`);

    const url = URL_RESOURCES.pexelApi+`?query=${query}&page=1&per_page=${page}`;
    const images = this.httpService.get<IPexelImages>(url, header).pipe(
      map((response) => this.getPexelMapper.map(response))
    );
    return images;
  }
}
