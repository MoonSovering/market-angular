import { Component, Input } from '@angular/core';
import { ICompany } from '../../../core/models/company.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-companies',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './list-companies.component.html',
  styleUrl: './list-companies.component.css'
})
export class ListCompaniesComponent {

  @Input() companies: ICompany[];
}
