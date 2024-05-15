import { Subscription, tap } from "rxjs";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"

})
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
    this.subscriptions.add(
      this.authService.farmerRegister(registerData).pipe(
        tap(() => this.router.navigate(["/auth/login"]))
      ).subscribe()
    );
  }
}
