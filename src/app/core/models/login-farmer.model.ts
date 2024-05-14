import { Photo } from "./interfaces/images-api.interfaces";
import { IProduct } from "./interfaces/product.interface";

export interface LoginFarmer {
  email:    string;
  username: string;
  status:   string;
  product:  IProduct[];
  id:       string;
}
