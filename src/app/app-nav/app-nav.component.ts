import { Component } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent {
  constructor(public auth: AuthService) { }

  logout(): void {
    this.auth.logout();
  }
}
