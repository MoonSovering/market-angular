import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-list-company-cart-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,HeaderContainerComponent],
  templateUrl: './list-company-cart-layout.component.html',
  styleUrl: './list-company-cart-layout.component.css'
})
export class ListCompanyCartLayoutComponent {

}
