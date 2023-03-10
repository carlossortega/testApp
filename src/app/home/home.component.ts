import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img!: any;
  name!: any;
  email!: any;

  date = new Date();
  hour = new Date().getHours();
  min = new Date().getMinutes();

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.img = this.authService.photo;
    if( this.img === undefined ){ this.img = ('../../assets/user.png') }
    this.name = this.authService.name;
    if( this.name === undefined ){ this.name = 'Anonymous' }
    this.email = this.authService.email;
  }





  logout(){
    this.authService.logout();
  }
}
