import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../core/services/generals/storage.service';


@Injectable({
  providedIn: "root"
})
export class publicMarketGuard implements CanActivate {
  constructor(private storage: StorageService,  private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const status = this.storage.get('status');

    if(status != 'FARMER' || status != 'COMPANY'){
      return true;
    }else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
