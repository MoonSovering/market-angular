import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-list-farmer-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,HeaderContainerComponent],
  templateUrl: './list-farmer-layout.component.html',
  styleUrl: './list-farmer-layout.component.css'
})
export class ListFarmerLayoutComponent {

}
