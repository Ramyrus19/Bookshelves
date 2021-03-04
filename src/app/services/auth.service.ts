import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // tslint:disable-next-line:typedef
  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
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
        firebase.auth().signInWithEmailAndPassword(email, password).then(
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
    firebase.auth().signOut();
  }
}
