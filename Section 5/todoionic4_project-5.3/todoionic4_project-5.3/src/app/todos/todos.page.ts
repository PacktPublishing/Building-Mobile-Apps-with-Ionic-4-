import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  userId: string;
  todos: any[] = [];

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { 
    this.userId = firebase.auth().currentUser.uid;
    this.getTodos();
  }

  ngOnInit() {
  }

  getTodos() {

    firebase.firestore().collection("todos")
    .where("owner", "==", this.userId)
    .where("status", "==", "incomplete")
    .onSnapshot((querySnapshot) => {
      this.todos = querySnapshot.docs;
    });

  }

  getDate(timestamp: firebase.firestore.Timestamp) {
    let date = timestamp.toDate();
    return date.toLocaleDateString();
  }

  gotoAddTodo() {
    this.navCtrl.navigateForward(['/add-todo']);
  }

  markCompleted(document: firebase.firestore.QueryDocumentSnapshot) {

    firebase.firestore().collection("todos").doc(document.id).set({
      "status": "completed"
    }, {
      merge: true
    }).then(() => {
      this.toastCtrl.create({
        message: "Todo item marked as completed!",
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })

  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.navigateRoot("/login");
    }).catch((err) => {
      console.log(err);
    });
  }

}
