import { Subscription, tap } from "rxjs";
import { AuthService } from "../../core/services/auth.service";
import { ICreateFarmer } from "../../core/models/interfaces/create-farmer.interface";
import { Router } from "@angular/router";


export class RegisterContainerFarmerFacade {
  private subscriptions: Subscription;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  registerFarmer(registerData): void {
    console.log("im data2" + registerData);
    this.subscriptions.add(
      this.authService.farmerRegister(registerData).pipe(
        tap(() => this.router.navigate(["/auth/login"]))
      ).subscribe()
    );
  }
}
