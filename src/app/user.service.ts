import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User): void {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    }).then(response => {
      console.log('user.service.ts@:17', response);
    }).catch(error => {
      console.log('user.service.ts@:19', error);
    });
  }
}
