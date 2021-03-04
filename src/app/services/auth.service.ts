import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// @ts-ignore
import { auth } from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
              public router: Router) { }

  // tslint:disable-next-line:typedef
  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          () => {
            // @ts-ignore
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // tslint:disable-next-line:typedef
  signInUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(email, password).then(
          () => {
            // @ts-ignore
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // tslint:disable-next-line:typedef
  signOutUser(){
    this.afAuth.signOut();
  }
}
