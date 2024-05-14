import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { URL_RESOURCES } from '../resources/url.resource';
import { HttpService } from './generals/http.service';
import { LoginFarmerMapper } from '../mappers/login-farmer.mapper';
import { LoginFarmer } from '../models/login-farmer.model';
import { loginMapper } from '../mappers/login.mapper';
import { StorageService } from './generals/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpService: HttpService,
    private readonly loginFarmerMapper: LoginFarmerMapper,
    private readonly loginMapper: loginMapper,
    private readonly storage: StorageService
  ) { }

  farmerLogin(loginData): Observable<LoginFarmer>{
    const mappedData = this.loginMapper.map(loginData);
    const url = URL_RESOURCES.login;
    const user = this.httpService.post<LoginFarmer>(url, mappedData)
    .pipe(
      map((result) => this.loginFarmerMapper.map(result) ),
      tap((result) => this.storage.set('status', result.status)),
      tap((result) => this.storage.set('id', result.id))
    );
    return user;
  }
}
