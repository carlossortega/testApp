import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  type: string = 'password';
  visibility: boolean = true;
  visibility_off: boolean = false;
  type2: string = 'password';
  visibility2: boolean = true;
  visibility_off2: boolean = false;
  enabled: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private firebaseService: FirebaseService,
  ){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  goBack(){
    this.router.navigate(['auth/login'])
  }

  showHide(){
    if( this.type === 'password' ){
      this.type = 'text';
      this.visibility_off = true;
      this.visibility = false;
    } else if ( this.type === 'text' ){
      this.type = 'password';
      this.visibility = true;
      this.visibility_off = false;
    }
  }
  showHide2(){
    if( this.type2 === 'password' ){
      this.type2 = 'text';
      this.visibility_off2 = true;
      this.visibility2 = false;
    } else if ( this.type2 === 'text' ){
      this.type2 = 'password';
      this.visibility2 = true;
      this.visibility_off2 = false;
    }
  }

  onCheck(event: any){
    const check = event.checked;
    if( this.form.valid ){
      if( check === true ){
        this.enabled = false;
      } else if( check === false ){
        this.enabled = true;
      }
    }
  }

  onClick(){
    const email = this.form.controls['email'].value;
    const pass = this.form.controls['password'].value;
    const passC = this.form.controls['confirmPassword'].value;
    if ( pass != passC ){
      this.firebaseService.code('auth/passwords-do-not-match');
    } else {
      this.authService.signUp(email, pass);
    }

  }

}
