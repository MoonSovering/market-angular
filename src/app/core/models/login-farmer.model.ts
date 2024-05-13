export interface LoginFarmer {
  email:    string;
  username: string;
  status:   string;
  product:  Product[];
  id:       string;
}

export interface Product {
  name:           string;
  category:       string;
  price:          number;
  amount:         number;
}
