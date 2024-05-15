import { Component } from '@angular/core';
import { ListFarmerLayoutComponent } from '../../ui/layouts/list-farmer-layout/list-farmer-layout.component';
import { ListFarmerComponent } from '../../ui/blocks/list-farmer/list-farmer.component';
import { Observable } from 'rxjs';
import { ListFarmerContainerFacade } from './list-farmer-container.facade';
import { IFarmer } from '../../core/models/product.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-farmer-container',
  standalone: true,
  imports: [ListFarmerComponent, AsyncPipe],
  templateUrl: './list-farmer-container.component.html'
})
export class ListFarmerContainerComponent {

  farmers$: Observable<IFarmer[]>;

  constructor(
    private readonly facade: ListFarmerContainerFacade
  ) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getFarmers();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
  }

  getFarmers(): void {
    this.facade.getFarmers();
  }

  private initializeSubscriptions(): void {
    this.farmers$ = this.facade.farmers$();
  }
}
