import { Component } from '@angular/core';
import { LinkedButton } from '../../core/models/interfaces/linked-button.interface';
import { HomeFarmerComponent } from '../../ui/blocks/home-farmer/home-farmer.component';

@Component({
  selector: 'app-farmer-home-container',
  standalone: true,
  imports: [HomeFarmerComponent],
  templateUrl: './farmer-home-container.component.html',
})
export class FarmerHomeContainerComponent {
  navigationElements: LinkedButton[]= [
    {
      label: 'Crear Producto',
      link: '/farmer/create-product'
    },
    {
      label: 'Lista de compañias',
      link: '/farmer/companies'
    },
    {
      label: 'Lista de productos',
      link: '/farmer/products'
    }
  ];
}
