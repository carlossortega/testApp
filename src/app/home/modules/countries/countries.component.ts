import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CountryService } from '../../../shared/services/country.service';
import { MatRadioChange } from '@angular/material/radio';
import { Country } from '../../../shared/interfaces/country';
import { MatSelectChange } from '@angular/material/select';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { Type } from '../../../shared/interfaces/giphy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  type!: string;
  countries: Country[] = [];
  suggestions: Country[] = [];
  error: boolean = false;
  method!: string;
  btn: boolean = true;
  btn_number: number = 0;
  @ViewChild('txt') txt!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private countryService: CountryService,
    private firebaseService: FirebaseService,
  ){}

  ngOnInit(): void {
    if( this.type == undefined ){ 
      this.type = 'America';
      this.countryService.getCountriesByRegion(this.type).subscribe( (resp) => { this.countries = resp; }) }
  }

  regionSelected(event: MatRadioChange){
    this.type = event.value;
    this.countryService.getCountriesByRegion(this.type).subscribe( (resp) => {
      this.countries = resp;
    })
  }

  selectType(event: string){
    this.method = event;
  }

  searchSelected(){
    const term = this.txt.nativeElement.value;
    if( this.method === undefined ){
      this.firebaseService.code('no-selected-type-search');
    } else if( term.length == 0 ){
      this.firebaseService.code('no-term-search');
    } else if (this.method !== undefined && term.length > 0 ) {
      this.btn = false;
      this.countryService.getCountriesBySearch( this.method, term ).subscribe( (resp) => {
        this.btn_number = resp.length;
        this.suggestions = resp
      });
    }
  }

  clear(){
    this.txt.nativeElement.value = '';
    this.suggestions = [];
    this.btn_number = 0;
  }
  
  seeCountry(item: Country){
    console.log(item);
    this.router.navigate(['/app/countries', item.cca3])
  }
  
}
