import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderComponent } from '../../blocks/header/header.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-list-companies-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,HeaderContainerComponent],
  templateUrl: './list-companies-layout.component.html',
  styleUrl: './list-companies-layout.component.css'
})
export class ListCompaniesLayoutComponent {

}
