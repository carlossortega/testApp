import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `https://jsonplaceholder.typicode.com/users`;

  constructor( private http: HttpClient ) {}

  getUsers(){
    return this.http.get<User[]>( this.baseUrl );
  }

  postUser(data: any){
    return this.http.post( this.baseUrl, data );
  }

  putUser(){
    return this.http.post( `${this.baseUrl}/`,{ name:'Carlos' });
  }



}
