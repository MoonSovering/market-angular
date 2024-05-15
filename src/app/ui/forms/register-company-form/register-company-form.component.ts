import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../elements/input/input.component';
import { CommonModule } from '@angular/common';
import { ICreateCompany } from '../../../core/models/interfaces/create-company.interface';

@Component({
  selector: 'app-register-company-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputComponent, CommonModule],
  templateUrl: './register-company-form.component.html',
  styleUrl: './register-company-form.component.css'
})
export class RegisterCompanyFormComponent {
  @Output() formData = new EventEmitter<ICreateCompany>();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    contact: new FormArray([]),
    address: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      contact: this.formBuilder.array([this.initContactField()])
    });
  }

  onSubmit($event: SubmitEvent): void {
    this.submitted = true;
    $event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    this.formData.emit(this.form.value);
  }

  private initContactField(): FormGroup {
    return this.formBuilder.group({
      contactType: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }
}
