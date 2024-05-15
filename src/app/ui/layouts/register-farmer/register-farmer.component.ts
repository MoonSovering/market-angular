import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';

@Component({
  selector: 'app-register-farmer',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './register-farmer.component.html',
  styleUrl: './register-farmer.component.css'
})
export class RegisterFarmerComponent {

}
