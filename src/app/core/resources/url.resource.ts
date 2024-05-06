import { environment } from "../../../environments/environment.develoment";


export const URL_RESOURCES = {
  login: `${environment.apiUrl}/auth/sign-in`,
  pexelApi: `${environment.pexelUrl}`,
  getAllFarmer: `${environment.apiUrl}/farmer`,
  getAllCompany: `${environment.apiUrl}/companies`,
  postProduct: `${environment.apiUrl}/waste/create`,
}
