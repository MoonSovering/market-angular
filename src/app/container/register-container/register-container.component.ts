import { Component, Input } from '@angular/core';
import { ICreateFarmer } from '../../core/models/interfaces/create-farmer.interface';
import { RegisterContainerFarmerFacade } from './register-container-farmer.facade';
import { RegisterFormComponent } from '../../ui/forms/register-form/register-form.component';

@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './register-container.component.html'
})
export class RegisterContainerComponent {
  @Input() registerValue: ICreateFarmer;
  constructor(
    private readonly facade: RegisterContainerFarmerFacade
  ) {
  }

  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getFormData(formData: ICreateFarmer): void {
    this.facade.registerFarmer(formData);
  }
}
