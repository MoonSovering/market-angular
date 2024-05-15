export interface ICreateFarmerResponse {
  farmerId:   string;
  farmerName: string;
  email:      string;
  password:   string;
  lastName:   string;
  address:    string;
  contact:    Contact[];
  type:       FarmerType[];
  waste?:      string;
  status:     string;
}

export interface Contact {
  contactType: string;
  contact:     string;
}

export interface FarmerType {
  typeFarm: string;
  farm:     string;
}
