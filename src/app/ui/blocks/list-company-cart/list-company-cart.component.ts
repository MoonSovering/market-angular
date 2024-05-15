import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IWaste } from '../../../core/models/waste.model';
import { LinkedButton } from '../../../core/models/interfaces/linked-button.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-company-cart',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './list-company-cart.component.html',
  styleUrl: './list-company-cart.component.css'
})
export class ListCompanyCartComponent {

  constructor(
    private readonly router: Router
  ) { }
  @Input() products: IWaste[];
  redirect: LinkedButton = {
    label: 'Comprar!',
    link: '/company'
  }

  onBuyClick(link: string): void {
    const userConfirmed = window.confirm('Por favor confirma tu compra.');
    if (userConfirmed) {
      this.router.navigateByUrl(link);
    }
  }
}
