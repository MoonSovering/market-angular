import { environment } from "../../../environments/environment.develoment";


export const URL_RESOURCES = {
  login: `${environment.apiUrl}/auth/sign-in`,
  pexelApi: `${environment.pexelUrl}`,
  getAllFarmers: `${environment.apiUrl}/farmer`,
  getAllCompany: `${environment.apiUrl}/companies`,
  postProduct: `${environment.apiUrl}/create/product`,
  getOneFarmer: `${environment.apiUrl}/farmer/get`,
  getCategories: `${environment.apiUrl}/product-category`,
  postWaste: `${environment.apiUrl}/waste/create`,
}
