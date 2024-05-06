export interface ICompany {
  companyId: string;
  name:      string;
  contact:   Contact[];
  address:   string;
  email:     string;
  password:  string;
  status:    string;
}

export interface Contact {
  contactType: string;
  contact:     string;
}
