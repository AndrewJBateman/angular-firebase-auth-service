# Angular Firebase Auth Service

Builds a user authentication app using Angular 7 and google Firebase.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Firebase Real-time database used, rules set to test:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}


```

## Screenshots

![Example screenshot](./img/user-logged-in.png).

## Technologies

* [Angular v7.2.13](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [Firebase v5.7.0](https://firebase.google.com/)

* [Reactive Extensions for Javascript -RxJS v6.3.3](https://angular.io/guide/rx-library) library used for reactive programming using the observable type.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* _user.service_ file

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserService {
  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );
  //test to see if already logged in
  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.db.object<boolean>('/admin/' +uid).valueChanges();
      }
    })
  );
  //test to see if user has specific permissions
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
```

## Features

* user login using google id or password, can be viewed on Firebase Console.

* User privileges can be revoked from the Firebase console.

## Status & To-Do List

* Status: Working app with a successful login storing login details in the firebase database.

* To-Do: add theme colors and functionality. A bootstrap button would be better.

## Inspiration

* [Demos With Angular: Building A User Authentication Service with Angular and Firebase](https://www.youtube.com/watch?v=mfONkAj4x94).

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
