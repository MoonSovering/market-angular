import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderComponent } from '../../blocks/header/header.component';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';

@Component({
  selector: 'app-farmer-create-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderContainerComponent],
  templateUrl: './farmer-create-layout.component.html',
  styleUrl: './farmer-create-layout.component.css'
})
export class FarmerCreateLayoutComponent {

}
