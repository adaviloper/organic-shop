import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x => console.log('app-nav.component.ts@:13', x));
  }

  logout() {
    this.afAuth.signOut();
  }
}
