import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../login.component';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  form!: FormGroup;
  sent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>,
  ){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onClick(){
    if( this.form.valid ){
      const email = this.form.controls['email'].value;
      this.authService.recoverPassword(email);
      const cerrar: boolean = this.authService.error;
      if( cerrar === true ){
        this.dialogRef.close();
      } else if ( cerrar === false ){
        this.sent = true;
        setTimeout(() => {
          this.dialogRef.close(true);
        }, 6000);
        
      }
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

}
