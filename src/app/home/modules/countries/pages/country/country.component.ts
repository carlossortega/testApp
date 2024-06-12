import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { CountryService } from '../../../../../shared/services/country.service';
import { Country, Currencies } from '../../../../../shared/interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  country!: Country;
  translations!: any;

  constructor( 
    private actRoute: ActivatedRoute,
    private countryService: CountryService,
  ){}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.countryService.getCountryByImage(id!).subscribe( resp => {
      this.country = resp[0];
      this.translations = this.country.translations;

      console.log(this.country);
    })
  }


}
