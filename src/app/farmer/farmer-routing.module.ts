import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerHomeContainerComponent } from '../container/farmer-home-container/farmer-home-container.component';
import { HomeFarmerLayoutComponent } from '../ui/layouts/home-farmer/home-farmer.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
