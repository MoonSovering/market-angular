import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../blocks/footer/footer.component';

@Component({
  selector: 'app-register-company-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './register-company-layout.component.html',
  styleUrl: './register-company-layout.component.css'
})
export class RegisterCompanyLayoutComponent {

}
