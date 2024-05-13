import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerHomeContainerComponent } from '../container/farmer-home-container/farmer-home-container.component';
import { HomeFarmerLayoutComponent } from '../ui/layouts/home-farmer/home-farmer.component';
import { FarmerCreateLayoutComponent } from '../ui/layouts/farmer-create-layout/farmer-create-layout.component';
import { ListCompaniesLayoutComponent } from '../ui/layouts/list-companies-layout/list-companies-layout.component';
import { ListProductsLayoutComponent } from '../ui/layouts/list-products-layout/list-products-layout.component';
import { FarmerCreateProductContainerComponent } from '../container/farmer-create-product-container/farmer-create-product-container.component';
import { ListCompaniesContainerComponent } from '../container/list-companies-container/list-companies-container.component';
import { ListProductsContainerComponent } from '../container/list-products-container/list-products-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFarmerLayoutComponent,
    children: [
      {
        path: '',
        component: FarmerHomeContainerComponent,
        outlet: 'home-farmer-page'
      }
    ]
  },
  {
    path: 'create-product',
    component: FarmerCreateLayoutComponent,
    children: [
      {
        path: '',
        component: FarmerCreateProductContainerComponent,
        outlet: 'create-product-page'
      }
    ]
  },
  {
    path: 'companies',
    component: ListCompaniesLayoutComponent,
    children: [
      {
        path: '',
        component: ListCompaniesContainerComponent,
        outlet: 'companies-page'
      }
    ]
  },
  {
    path: 'products',
    component: ListProductsLayoutComponent,
    children: [
      {
        path: '',
        component: ListProductsContainerComponent,
        outlet: 'products-page'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
