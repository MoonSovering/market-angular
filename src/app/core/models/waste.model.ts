import { Photo } from "./interfaces/images-api.interfaces";

export interface IWaste {
  wasteId:        string;
  farmer:         Farmer;
  product:        Product;
  photo?:         Photo;
}

export interface Farmer {
  name:     string;
  farm:     string;
  farmType: string;
}

export interface Product {
  name:     string;
  price:    number;
  stock:    number;
  category: string;
}
