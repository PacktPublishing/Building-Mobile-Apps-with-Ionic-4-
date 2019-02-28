import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  signup() {

    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })

  }

}
