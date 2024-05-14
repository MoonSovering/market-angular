import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProductCategory } from '../../../core/models/product-category.model';
import { ICreateProduct } from '../../../core/models/interfaces/create-product.interface';
import { JsonPipe } from '@angular/common';
import { IProductCreateResponse } from '../../../core/models/interfaces/product-create-response.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, RouterLink],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  @Output() buyProduct = new EventEmitter<ICreateProduct>();
  @Input() categories: IProductCategory[];
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    category_id: new FormControl('')
  });
  submitted = false;
  constructor( private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['',],
        price: [1,],
        stock: [1,],
        category_id: ['']
      },
    )
}

onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    this.buyProduct.emit(this.form.value);
    this.router.navigate(['/farm/products']);

  }
}
