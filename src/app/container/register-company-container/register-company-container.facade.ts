import { Injectable } from "@angular/core";
import { Subscription, tap } from "rxjs";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"

})
export class RegisterCompanyContainerFacade {
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

  registerCompany(registerData): void {
    this.subscriptions.add(
      this.authService.companyRegister(registerData).pipe(
        tap(() => this.router.navigate(["/auth/login"]))
      ).subscribe()
    );
  }
}
