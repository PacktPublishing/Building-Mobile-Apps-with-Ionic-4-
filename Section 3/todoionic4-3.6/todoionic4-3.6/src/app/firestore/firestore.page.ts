import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.page.html',
  styleUrls: ['./firestore.page.scss'],
})
export class FirestorePage implements OnInit {

  constructor() {

    firebase.firestore().collection("products").add({
      "product_name": "Samsung Galaxy S9",
      "product_price": "900"
    }).then(() => {
      console.log("Successfully added new document");
    }).catch((err) => {
      console.log(err);
    })

  }

  ngOnInit() {
  }

}
