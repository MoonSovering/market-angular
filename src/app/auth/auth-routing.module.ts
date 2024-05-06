import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../ui/layouts/auth-layout/auth-layout.component';
import { LoginFormComponent } from '../ui/forms/login-form/login-form.component';
import { RegisterFormComponent } from '../ui/forms/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent,
        outlet: 'auth-form'
      }
    ]
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
