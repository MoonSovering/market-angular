import { Injectable } from "@angular/core";
import { FarmerState } from "./farmer.state";
import { CompanyState } from "./company.state";

@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor(
    private readonly farmerState: FarmerState,
    private readonly companyState: CompanyState,
   )
   { }

   get farmer(){
      return this.farmerState.farmerStore();
   }
   get companies(){
     return this.farmerState.companiesStore();
   }
   get categories(){
     return this.farmerState.categoriesStore();
   }
    get product(){
      return this.farmerState.productStore();
    }
    get farmers(){
      return this.companyState.farmersStore();
    }
}
