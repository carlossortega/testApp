import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CountryComponent } from './pages/country/country.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    SharedModule,

  ]
})
export class CountriesModule { }
