export interface ICreateCompany {
  name:     string;
  contact:  Contact[];
  address:  string;
  email:    string;
  password: string;
}

export interface Contact {
  contactType: string;
  contact:     string;
}
