import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderComponent } from '../../blocks/header/header.component';

@Component({
  selector: 'app-list-products-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './list-products-layout.component.html',
  styleUrl: './list-products-layout.component.css'
})
export class ListProductsLayoutComponent {

}
