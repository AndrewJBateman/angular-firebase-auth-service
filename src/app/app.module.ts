import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyCUD6Ekbr4Fb0cxXwnCG-HRzSKljKm1WIg",
        authDomain: "user-service-example-10459.firebaseapp.com",
        databaseURL: "https://user-service-example-10459.firebaseio.com",
        projectId: "user-service-example-10459",
        storageBucket: "user-service-example-10459.appspot.com",
        messagingSenderId: "942414466681"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
