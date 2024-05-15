export interface ICreateFarmer {
  userName: string;
  email:    string;
  password: string;
  lastName: string;
  address:  string;
  contact:  Contact[];
  type:     FarmerType[];
}

export interface Contact {
  contactType: string;
  contact:     string;
}

export interface FarmerType {
  typeFarm: string;
  farm:     string;
}
