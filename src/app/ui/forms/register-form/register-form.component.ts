import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../elements/input/input.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputComponent, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    contact: this.formBuilder.array([this.initContactField()]),
    type: this.formBuilder.array([this.initTypeField()])
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder ){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      contact: this.formBuilder.array([this.initContactField()]),
      type: this.formBuilder.array([this.initTypeField()])
    });
  }

  onSubmit($event: SubmitEvent): void {
    this.submitted = true;
    $event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
  private initContactField(): FormGroup {
    return this.formBuilder.group({
      contactType: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  private initTypeField(): FormGroup {
    return this.formBuilder.group({
      typeFarm: ['', Validators.required],
      farm: ['', Validators.required],
    });
  }

  get contactControls() {
    return (this.form.get('contact') as FormArray).controls;
  }

  addContact() {
    const contactArray = this.form.get('contact') as FormArray;
    contactArray.push(this.initContactField());
  }

  removeContact(index: number) {
    const contactArray = this.form.get('contact') as FormArray;
    contactArray.removeAt(index);
  }

  get typeControls() {
    return (this.form.get('type') as FormArray).controls;
  }

  addType() {
    const typeArray = this.form.get('type') as FormArray;
    typeArray.push(this.initTypeField());
  }

  removeType(index: number) {
    const typeArray = this.form.get('type') as FormArray;
    typeArray.removeAt(index);
  }
}
