import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  baseUrl: string = 'http://localhost:3000/heroes'

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }`);
  }

  getById( id: string ): Observable<Hero>{
    return this.http.get<Hero>(`${ this.baseUrl }/${ id }`);
  }

  getSuggestions(term: string){
    return this.http.get<Hero[]>(`${this.baseUrl}?q=${term}&_limit=5`);
  }

  post( heroe: Hero ): Observable<Hero>{
    return this.http.post<Hero>(`${ this.baseUrl }`, heroe);
  }

  put( heroe: Hero ): Observable<Hero>{
    return this.http.put<Hero>(`${ this.baseUrl }/${ heroe.id }`, heroe);
  }

  delete( heroe: Hero ){
    return this.http.delete(`${ this.baseUrl }/${ heroe.id }`);
  }

}
