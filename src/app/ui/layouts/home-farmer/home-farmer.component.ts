import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderComponent } from '../../blocks/header/header.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-home-farmer',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderContainerComponent],
  templateUrl: './home-farmer.component.html',
  styleUrl: './home-farmer.component.css'
})
export class HomeFarmerLayoutComponent {

}
