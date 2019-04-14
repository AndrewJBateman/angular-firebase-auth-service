import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
        apiKey: environment.API_KEY,
        authDomain: environment.AUTH_DOMAIN,
        databaseURL: environment.DATABASE_URL,
        projectId: environment.PROJECT_ID,
        storageBucket: environment.STORAGE_BUCKET,
        messagingSenderId: environment.MESSAGING_SENDER_ID
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
