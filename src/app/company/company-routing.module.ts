import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompanyLayoutComponent } from '../ui/layouts/home-company-layout/home-company-layout.component';
import { HomeCompanyContainerComponent } from '../container/home-company-container/home-company-container.component';
import { ListFarmerLayoutComponent } from '../ui/layouts/list-farmer-layout/list-farmer-layout.component';
import { ListFarmerContainerComponent } from '../container/list-farmer-container/list-farmer-container.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
