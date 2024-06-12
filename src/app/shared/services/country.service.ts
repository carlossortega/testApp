import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  getCountriesByRegion(region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${ this.baseUrl }/region/${ region }`);
  }

  getCountryByImage(id: string): Observable<any>{
    return this.http.get<any>(`${ this.baseUrl }/alpha/${ id }`);
  }

  getCountriesBySearch(method: string, term: string){
    return this.http.get<Country[]>(`${ this.baseUrl }/${ method }/${ term }`);
  }


}
