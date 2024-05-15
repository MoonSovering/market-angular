import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-list-company-products-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,HeaderContainerComponent],
  templateUrl: './list-company-products-layout.component.html',
  styleUrl: './list-company-products-layout.component.css'
})
export class ListCompanyProductsLayoutComponent {

}
