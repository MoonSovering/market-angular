import { Component } from '@angular/core';
import { ListCompaniesComponent } from '../../ui/blocks/list-companies/list-companies.component';
import { Observable } from 'rxjs';
import { ICompany } from '../../core/models/company.model';
import { ListCompaniesFacade } from './list-companies.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-companies-container',
  standalone: true,
  imports: [ListCompaniesComponent, AsyncPipe],
  templateUrl: './list-companies-container.component.html'
})
export class ListCompaniesContainerComponent {

  companies$: Observable<ICompany[]>

  constructor(
    private readonly facade: ListCompaniesFacade
  ){}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getCompanies();
    this.initializeSubscriptions();

  }
  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getCompanies(): void {
    this.facade.getCompanies();
  }

  private initializeSubscriptions(): void {
    this.companies$ = this.facade.companies$();
  }
}
