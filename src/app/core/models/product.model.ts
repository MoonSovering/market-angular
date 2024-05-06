import { Photo } from "./interfaces/images-api.interfaces";

export interface IFarmer {
  farmerId:   string;
  farmerName: string;
  email:      string;
  password:   string;
  lastName:   string;
  address:    string;
  contact:    Contact[];
  type:       FarmTpe[];
  waste:      Waste[];
  status:     string;
  photo: Photo;
}

export interface Contact {
  contactType: string;
  contact:     string;
}

export interface FarmTpe {
  typeFarm: string;
  farm:     string;
}

export interface Waste {
  name:           string;
  category:       string;
  price:          number;
  amount:         number;
}
