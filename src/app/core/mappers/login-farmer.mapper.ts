import { Injectable } from "@angular/core";
import { LoginFarmer } from "../models/login-farmer.model";

@Injectable({
  providedIn: 'root'
})
export class loginFarmer{
  map(payload: any): LoginFarmer{
    const product = payload.product.map((product) => {
      return {
        name: product.name,
        category: product.category,
        price: product.price,
        amount: product.amount
      }
    });
    return {
      email: payload.email,
      username: payload.username,
      status: payload.status,
      product,
      id: payload.id
      }
    }
}
