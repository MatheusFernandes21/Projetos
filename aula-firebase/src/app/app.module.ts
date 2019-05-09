import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore, FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebase);

import { AuthenticationService } from './services/authentication.service'
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule, AngularFireAuthModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
