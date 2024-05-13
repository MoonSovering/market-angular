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
      link: '/farm/create-product'
    },
    {
      label: 'Lista de compañias',
      link: '/farm/companies'
    },
    {
      label: 'Lista de productos',
      link: '/farm/products'
    }
  ];
}
