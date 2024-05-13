import { Component, Input } from '@angular/core';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-farmer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-farmer.component.html',
  styleUrl: './home-farmer.component.css'
})
export class HomeFarmerComponent {
  @Input() navigationElements: LinkedButton[];
}
