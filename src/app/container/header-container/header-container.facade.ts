import { Router } from "@angular/router";
import { StorageService } from "../../core/services/generals/storage.service";
import { Injectable } from "@angular/core";
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';


@Injectable({
  providedIn: "root"

})
export class HeaderContainerFacade {
  constructor(
    private readonly store: StorageService,
    private readonly router: Router,
  ) {}


  public handleLinkedButtonValue(data: string): void {
    if(data === 'logout') {
      this.store.remove('id');
      this.store.remove('status');
      this.router.navigate(['/auth/sign-in']);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  public handleMenu(): LinkedButton[] {
    const status = this.store.get('status');
    if(status === 'FARMER') {
      const linkedButton: LinkedButton[] = [
        {
          label: 'home',
          link: '/farm'
        },
        {
          label: 'logout',
          link: '/auth/login'
        }
      ];
      return linkedButton;
    }
    if(status === 'COMPANY') {
      const linkedButton: LinkedButton[] = [
        {
          label: 'home',
          link: '/company'
        },
        {
          label: 'logout',
          link: '/auth/login'
        }
      ];
      return linkedButton;
    }
    return [];
  }
}
