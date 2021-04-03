import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private firebaseAuth: AngularFireAuth) { }

  login(): void {
    this.firebaseAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
