import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../elements/input/input.component';
import { ILogin } from '../../../core/models/interfaces/login.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() loginValue = new EventEmitter<ILogin>();

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder ){}

  ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]
          ]
        },
      )
  }

  onSubmit($event: SubmitEvent): void {
    this.submitted = true;
    $event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.loginValue.emit(this.form.value);
  }

}
