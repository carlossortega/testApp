import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public photo!: any;
  public name!: any;
  public email!: any;
  public error!: boolean;

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private firebaseService: FirebaseService,
  ){}

  recoverPassword(email: string){
    this.auth.sendPasswordResetEmail(email).then( resp => {
      if( resp === undefined ){ this.error = false; }
    }).catch( error => {
      this.firebaseService.code(error.code);
      this.error = true;
    })
  }

  signIn(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then( resp => {
      this.auth.authState.subscribe( user => {
        let userEmail = user?.email;
        this.email = userEmail?.split('@')[0];
        this.firebaseService.code('auth/signIn');
        this.router.navigate(['app/menu']);
      })
    }).catch( error => {
      this.firebaseService.code(error.code);
    })
  }

  signUp(email: string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then( user => {
      this.firebaseService.code('auth/signUp');
      this.router.navigate(['auth/login']);
    }).catch( error => {
      this.firebaseService.code(error.code);
    })
  }

  signInWithSocialMedia(social: string){
    if( social === 'google' ){
      this.auth.signInWithPopup( new GoogleAuthProvider ).then( user => {
        //Photo
        this.photo = user.user?.photoURL;
        //Name
        let valor = user.user?.displayName;
        let userName = valor?.split(' ')[0];
        let userSurname = valor?.split(' ')[1];
        this.name = (userName +' '+userSurname);
        //Email
        let userEmail = user.user?.email;
        this.email = userEmail?.split('@')[0];
        //Message
        this.firebaseService.code('auth/signIn');
        this.router.navigate(['app/menu']);
      }).catch( error => {
        this.firebaseService.code(error.code);
      })
    } else if ( social === 'facebook' ){
      this.auth.signInWithPopup( new FacebookAuthProvider ).then( user => {
        //Photo
        this.photo = user.user?.photoURL;
        //Name
        let valor = user.user?.displayName;
        let userName = valor?.split(' ')[0];
        let userSurname = valor?.split(' ')[1];
        this.name = (userName +' '+userSurname);
        //Email
        let userEmail = user.user?.email;
        this.email = userEmail?.split('@')[0];
        //Message
        this.firebaseService.code('auth/signIn');
        this.router.navigate(['app/menu']);
      }).catch( error => {
        this.firebaseService.code(error.code);
      })
    } else if( social === 'github' ){
      this.auth.signInWithPopup( new GithubAuthProvider ).then( user => {
         //Photo
         this.photo = user.user?.photoURL;
         //Name
         let valor = user.user?.displayName;
         let userName = valor?.split(' ')[0];
         let userSurname = valor?.split(' ')[1];
         this.name = (userName +' '+userSurname);
         //Email
         let userEmail = user.user?.email;
         this.email = userEmail?.split('@')[0];
         //Message
        this.firebaseService.code('auth/signIn');
        this.router.navigate(['app/menu']);
      }).catch( error => {
        this.firebaseService.code(error.code);
      })
    }
  }

  logout(){
    this.auth.signOut();
    this.router.navigate(['auth/login']);
    this.firebaseService.code('auth/signOut')
  }


}
