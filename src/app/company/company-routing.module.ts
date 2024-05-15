import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompanyLayoutComponent } from '../ui/layouts/home-company-layout/home-company-layout.component';
import { HomeCompanyContainerComponent } from '../container/home-company-container/home-company-container.component';
import { ListFarmerLayoutComponent } from '../ui/layouts/list-farmer-layout/list-farmer-layout.component';
import { ListFarmerContainerComponent } from '../container/list-farmer-container/list-farmer-container.component';
import { ListCompanyProductsLayoutComponent } from '../ui/layouts/list-company-products-layout/list-company-products-layout.component';
import { ListCompanyProductContainerComponent } from '../container/list-company-product-container/list-company-product-container.component';
import { ListCompanyCartContainerComponent } from '../container/list-company-cart-container/list-company-cart-container.component';
import { ListCompanyCartLayoutComponent } from '../ui/layouts/list-company-cart-layout/list-company-cart-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCompanyLayoutComponent,
    children: [
      {
        path: '',
        component: HomeCompanyContainerComponent,
        outlet: 'home-company-page'
      }
    ]
  },
  {
    path: 'farmers',
    component: ListFarmerLayoutComponent,
    children: [
      {
        path: '',
        component: ListFarmerContainerComponent,
        outlet: 'list-farmer-page'
      }
    ]
  },
  {
    path: 'products',
    component: ListCompanyProductsLayoutComponent,
    children: [
      {
        path: '',
        component: ListCompanyProductContainerComponent,
        outlet: 'list-company-products-page'
      }
    ]
  },
  {
    path: 'cart',
    component: ListCompanyCartLayoutComponent,
    children: [
      {
        path: '',
        component: ListCompanyCartContainerComponent,
        outlet: 'list-company-cart-page'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/company'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
