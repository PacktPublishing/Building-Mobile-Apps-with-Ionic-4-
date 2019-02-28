import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBe_wlaFYM-4LFniDEFnLAHPlStpRqghxM",
  authDomain: "todoapp-3ccee.firebaseapp.com",
  databaseURL: "https://todoapp-3ccee.firebaseio.com",
  projectId: "todoapp-3ccee",
  storageBucket: "todoapp-3ccee.appspot.com",
  messagingSenderId: "939738679270"
});

firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
