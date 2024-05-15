import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../ui/layouts/auth-layout/auth-layout.component';
import { RegisterFormComponent } from '../ui/forms/register-form/register-form.component';
import { LoginContainerComponent } from '../container/login-container/login-container.component';
import { publicMarketGuard } from './public-market.guard';
import { RegisterContainerComponent } from '../container/register-container/register-container.component';
import { RegisterFarmerComponent } from '../ui/layouts/register-farmer/register-farmer.component';
import { RegisterCompanyLayoutComponent } from '../ui/layouts/register-company-layout/register-company-layout.component';
import { RegisterCompanyContainerComponent } from '../container/register-company-container/register-company-container.component';

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
    component: RegisterFarmerComponent,
    children: [
      {
        path: '',
        component: RegisterContainerComponent,
        outlet: 'auth-register-farmer'
      }
    ], canActivate: [publicMarketGuard]
  },
  {
    path: 'register-company',
    component: RegisterCompanyLayoutComponent,
    children: [
      {
        path: '',
        component: RegisterCompanyContainerComponent,
        outlet: 'auth-register-company'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
