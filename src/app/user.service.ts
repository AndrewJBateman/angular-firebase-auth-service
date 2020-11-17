import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, switchMap, tap } from 'rxjs/operators';
import firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  uid = this.auth.authState.pipe(
    map((authState) => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );

  // test to see if already logged in
  isLoggedIn: Observable<boolean> = this.uid.pipe(
    tap((uid) => console.log('this.uid is of type:', typeof(this.uid))),
    switchMap((uid) => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      }
    })
  );
  // test to see if user has specific permissions
  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {}
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
