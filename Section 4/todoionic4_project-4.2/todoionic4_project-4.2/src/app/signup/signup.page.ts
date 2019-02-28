import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((userData) => {

      console.log(userData);
      // Navigate the user to the app page

    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).then((toast) => {
        toast.present();
      })
    })
  }

}
