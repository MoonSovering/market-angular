import { Injectable } from "@angular/core";
import { map } from 'rxjs';
import { ILogin } from "../models/interfaces/login.interface";


@Injectable({
  providedIn: "root"
})
export class loginMapper {
  map(payload: any): ILogin {
    return {
      email: payload.email,
      password: payload.password
    }
  }
}
