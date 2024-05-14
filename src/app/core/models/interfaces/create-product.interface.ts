export interface ICreateProduct {
  farmer_id?:         string;
  product_id?:        string;
  name:        string;
  price:       number;
  stock:       number;
  category_id: string;
}
