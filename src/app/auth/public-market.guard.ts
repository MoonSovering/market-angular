import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../core/services/generals/storage.service';


@Injectable({
  providedIn: "root"
})
export class publicMarketGuard implements CanActivate {
  constructor(private storage: StorageService,  private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const status = this.storage.get('status');
    console.log(status);

    if (status === null || status === undefined) {
      return true;
    }

    if (status === 'FARMER') {
      this.router.navigate(["/farm"]);
      return false;
    } else if (status === 'COMPANY') {
      this.router.navigate(["/company"]);
      return false;
    } else {
      return true;
    }
  }
}



