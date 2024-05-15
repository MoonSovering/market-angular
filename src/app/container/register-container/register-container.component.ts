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
  ) { this.getFormData(this.registerValue);
    console.log("im data "+this.registerValue);
    console.log("im data ");
  }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.getFormData(this.registerValue);
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }
  getFormData(formData): void {
    console.log("im data "+formData);
    console.log("adsjadsa");
    this.facade.registerFarmer(formData);
  }
}
