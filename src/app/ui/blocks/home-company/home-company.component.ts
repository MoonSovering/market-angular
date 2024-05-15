import { Component, Input } from '@angular/core';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-company',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-company.component.html',
  styleUrl: './home-company.component.css'
})
export class HomeCompanyComponent {
  @Input() navigationElements: LinkedButton[];
}
