import { Photo } from "./interfaces/images-api.interfaces";

export interface ICompany {
  companyId: string;
  name:      string;
  contact:   Contact[];
  address:   string;
  email:     string;
  password:  string;
  status:    string;
  photo?:    Photo;
}

export interface Contact {
  contactType: string;
  contact:     string;
}
