import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Giphy, Gif } from '../interfaces/giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  baseUrl: string = 'https://api.giphy.com/v1/';
  api_key: string = 'RR1ZeGzLg61LBCYyGmKFoL6SJ1aBSmr3';
  
  public giphys!: Gif[];
  public historial: string[] = [];


  constructor( private http: HttpClient ) { }

  get history(){
    return [...this.historial];
  }

  getTreding(type: string){
    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', 50)

    this.http.get<Giphy>( this.baseUrl + type +'/trending', {params} ).subscribe( resp => {
      this.giphys = resp.data;
    })
  }

  searchGiphys(type: string, term: string){
    const termino = term.trim().toLowerCase();
    if( !this.historial.includes(termino) ){
      this.historial.unshift(termino);
      this.historial = this.historial.splice(0,6);
    }

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('q', term)
      .set('limit', 50)

    this.http.get<Giphy>( this.baseUrl + type +'/search', {params} ).subscribe( resp => {
      this.giphys = resp.data;
    });
  }


}
