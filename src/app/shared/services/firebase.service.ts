import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private toast: ToastrService,
  ) { }

  code(error: string){
    switch(error){
    // -----> ERRORES AL INICIAR SESIÓN Y REGISTRARSE 
    //LOGIN FORM
      //Usuario no encontrado
      case 'auth/user-not-found':
        return this.toast.error('The email does not exist');
      //Contraseña incorrecta
      case 'auth/wrong-password':
        return this.toast.error('Incorrect password');
      //Muchas solicitudes
      case 'auth/too-many-requests':
        return this.toast.info('Please try again later...','Too many requests!');

    //LOGIN POPUP
      //Ventana emergente cerrada
      case 'auth/popup-closed-by-user':
        return this.toast.warning('Popup closed by user...','Request failed!');
      //Permiso cancelado-denegado
      case 'auth/user-cancelled':
        return this.toast.warning('Request canceled');

    //REGISTER
      //Email invalido
      case 'auth/invalid-email':
        return this.toast.error('Icorrect email');
      //Contraseñas no coinciden
      case 'auth/passwords-do-not-match':
        return this.toast.error('Passwords do not match');
      //Email ya existe
      case 'auth/email-already-in-use':
        return this.toast.warning('The email is already in use');

    // -----> AVISOS EXITOSO AL INICIAR SESION O CERRAR SESION
      //Inicio de sesión correctamente
      case 'auth/signIn':
        return this.toast.success('Session successfully started!');
      //Registro correctamente
      case 'auth/signUp':
        return this.toast.success('Successful registration!');
      //Sesion terminada 
      case 'auth/signOut':
        return this.toast.success('Session ended!');
      default:
        return;
    }
  }

}
