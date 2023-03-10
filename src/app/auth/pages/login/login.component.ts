import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { RecoverPasswordComponent } from './dialogs/recover-password/recover-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  type: string = 'password';
  visibility: boolean = true;
  visibility_off: boolean = false;
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private authService: AuthService,
  ){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
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

  recover(){
    const dialogRef = this.dialog.open(RecoverPasswordComponent, {
      width: '40%',
      height: 'auto',
      disableClose: true,
    });
  }

  goSignUp(){
    this.router.navigate(['auth/register']);
  }

  onClick(){
    if(this.form.valid){
      const email = this.form.controls['email'].value;
      const password = this.form.controls['password'].value;
      this.authService.signIn(email, password);
    }
  }

  signInSocial(type: string){
    this.authService.signInWithSocialMedia(type);
  }

}
