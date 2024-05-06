import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../elements/input/input.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;

  constructor( private formBuilder: FormBuilder ){}

  ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
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
    //this.loginValue.emit(this.form.value); just insert the service here
  }

}
