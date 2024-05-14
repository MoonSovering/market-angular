import { Injectable } from "@angular/core"
import { Observable, Subscription, tap } from "rxjs";
import { AppState } from "../../core/state/app.state";
import { Router } from "@angular/router";
import { IFarmer } from "../../core/models/product.model";
import { AuthService } from "../../core/services/auth.service";
import { ILogin } from "../../core/models/interfaces/login.interface";
import { LoginFarmer } from "../../core/models/login-farmer.model";


@Injectable({
  providedIn: "root"
})
export class LoginContainerFacade {

  private subscriptions: Subscription;
  constructor(
    private readonly appState: AppState,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  farmer$(): Observable<IFarmer> {
    return this.appState.farmer.$();
  }
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  getFarmer(formData: ILogin): void {
    console.log(this.farmer$());
    this.subscriptions.add(
      this.authService.farmerLogin(formData).pipe(
        tap(this.appState.farmer.set.bind(this)),
        tap(() => this.router.navigate(["/farm"]))
      ).subscribe()
    );
  }
}
