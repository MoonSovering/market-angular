import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';
import { HeaderComponent } from '../../blocks/header/header.component';

@Component({
  selector: 'app-home-farmer',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './home-farmer.component.html',
  styleUrl: './home-farmer.component.css'
})
export class HomeFarmerLayoutComponent {

}
