import { Photo } from "./images-api.interfaces";

export interface IProduct {
  name:           string;
  category:       string;
  price:          number;
  amount:         number;
  photo?: Photo;
}
