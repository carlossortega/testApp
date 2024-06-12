import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: any;
  img!: any;
  name!: any;
  email!: any;

  date = new Date();
  hour = new Date().getHours();
  hours!: any;
  min = new Date().getMinutes();
  minutes!: any;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {    
    this.img = this.authService.photo;
    if( this.img === undefined ){ this.img = ('../../assets/menu/user.png') }
    this.name = this.authService.name;
    if( this.name === undefined ){ this.name = 'Anonymous' }
    this.email = this.authService.email;

    if( this.hour < 10 ){
      this.hours = '0'+this.hour;
    } else {
      this.hours = this.hour;
    }
    if( this.min < 10 ){
      this.minutes = '0'+this.min;
    } else {
      this.minutes = this.min;
    }

  }

  logout(){
    this.authService.logout();
    localStorage.removeItem('token');
  }
}
