import { Component, Input } from '@angular/core';
import { RegisterCompanyFormComponent } from '../../ui/forms/register-company-form/register-company-form.component';
import { ICreateCompany } from '../../core/models/interfaces/create-company.interface';
import { RegisterCompanyContainerFacade } from './register-company-container.facade';

@Component({
  selector: 'app-register-company-container',
  standalone: true,
  imports: [RegisterCompanyFormComponent],
  templateUrl: './register-company-container.component.html'
})
export class RegisterCompanyContainerComponent {

  @Input() registerValue: ICreateCompany;
  constructor(
    private readonly facade: RegisterCompanyContainerFacade
  ) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getFormData(formData: ICreateCompany): void {
    this.facade.registerCompany(formData);
  }
}
