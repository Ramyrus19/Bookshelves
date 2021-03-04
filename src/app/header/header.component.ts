import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.isAuth = !!user;
    });
  }

  // tslint:disable-next-line:typedef
  onSignout(){
    this.authService.signOutUser();
  }

}
