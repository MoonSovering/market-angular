import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../ui/layouts/auth-layout/auth-layout.component';
import { RegisterFormComponent } from '../ui/forms/register-form/register-form.component';
import { LoginContainerComponent } from '../container/login-container/login-container.component';
import { publicMarketGuard } from './public-market.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginContainerComponent,
        outlet: 'auth-form'
      }
    ], canActivate: [publicMarketGuard]
  },
  {
    path: 'register',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: RegisterFormComponent,
        outlet: 'auth-form'
      }
    ], canActivate: [publicMarketGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
