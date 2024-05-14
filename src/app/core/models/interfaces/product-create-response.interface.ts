import { Photo } from "./images-api.interfaces";


export interface IProductCreateResponse {
  id:         string;
  name:        string;
  price:       number;
  stock:       number;
  category_id: string;
  photo?: Photo;
}
