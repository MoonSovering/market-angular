import { Component } from '@angular/core';
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';
import { HomeCompanyComponent } from '../../ui/blocks/home-company/home-company.component';

@Component({
  selector: 'app-home-company-container',
  standalone: true,
  imports: [HomeCompanyComponent],
  templateUrl: './home-company-container.component.html'
})
export class HomeCompanyContainerComponent {
  navigationElements: LinkedButton[]= [
    {
      label: 'Productos',
      link: '/company/products'
    },
    {
      label: 'Lista de Agricultores',
      link: '/company/farmers'
    }
  ];
}
