import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../ui/forms/login-form/login-form.component';
import { ILogin } from '../../core/models/interfaces/login.interface';
import { LoginContainerFacade } from './login-container.facade';
import { IFarmer } from '../../core/models/product.model';
import { Observable } from 'rxjs';
import { LoginFarmer } from '../../core/models/login-farmer.model';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent implements OnInit, OnDestroy{
  constructor(
    private readonly facade: LoginContainerFacade
  ) { }
  farmer$: Observable<IFarmer>;
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  loginFarmer(loginData: ILogin): void {
    this.facade.getFarmer(loginData);
  }
  private initializeSubscriptions(): void {
    this.farmer$ = this.facade.farmer$();
  }
}
