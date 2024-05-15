import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-home-company-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderContainerComponent],
  templateUrl: './home-company-layout.component.html',
  styleUrl: './home-company-layout.component.css'
})
export class HomeCompanyLayoutComponent {

}
