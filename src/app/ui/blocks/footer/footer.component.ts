import { Component } from '@angular/core';
import { LinkedLogo } from '../../../core/models/interfaces/linkedLogo.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  linkedLogo: LinkedLogo[] = [
    {
      path: 'assets/icons/facebook-icon.svg',
      link: 'https://www.facebook.com',
      alt: 'Facebook svg icon'
    },
    {
      path: 'assets/icons/instagram-icon.svg',
      link: 'https://www.instagram.com',
      alt: 'Instagram svg icon'
    },
    {
      path: 'assets/icons/twitter-icon.svg',
      link: 'https://www.twitter.com',
      alt: 'Twitter svg icon'
    }
  ];
}
