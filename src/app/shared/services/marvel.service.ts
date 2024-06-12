import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/marvel/characters';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  baseUrl: string = 'https://gateway.marvel.com:443/v1/public';
  params = new HttpParams()
    .set('ts', 1)
    .set('apikey', '222abcec296beda2280542f90130fa2c') 
    .set('hash', '5293cc26e8ce412d469f0eb8d7920153') 
    .set('limit', 1);

  options = { params: this.params }

  constructor( private http: HttpClient ) { }

  // TODO: C H A R A C T E R S
  getCharacters(): Observable<Characters>{
    return this.http.get<Characters>(`${ this.baseUrl }/characters`, this.options );
  }
  getCharacterById(id: number): Observable<Characters>{
    return this.http.get<Characters>(`${ this.baseUrl }/characters/${ id }`, this.options );
  }
  




}
