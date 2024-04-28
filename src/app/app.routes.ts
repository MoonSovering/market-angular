import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'farm',
    loadChildren: () => import('./farmer/farmer.module')
      .then(m => m.FarmerModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module')
      .then(m => m.CompanyModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
