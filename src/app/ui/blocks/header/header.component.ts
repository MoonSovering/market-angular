import { Component } from '@angular/core';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  linkedButton: LinkedButton[] = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'logout',
      link: '/auth/sign-in'
    }
  ];

}
