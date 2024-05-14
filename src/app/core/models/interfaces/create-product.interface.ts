export interface ICreateProduct {
  name:        string;
  price:       number;
  stock:       number;
  category_id: string;
  farmer_id?:         string;
  product_id?:        string;
}
