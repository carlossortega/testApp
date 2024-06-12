import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
  },
  {
    path: ':id',
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
