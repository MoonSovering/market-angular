import { Injectable } from "@angular/core";
import { FarmerState } from "./farmer.state";

@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor(
    private readonly farmerState: FarmerState,
   )
   { }

   get farmer(){
      return this.farmerState.farmerStore();
   }
   get companies(){
     return this.farmerState.companiesStore();
   }
}
