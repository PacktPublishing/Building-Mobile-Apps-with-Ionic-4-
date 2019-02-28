import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  userId: string;
  todos: any[] = [];

  constructor(private navCtrl: NavController) { 
    this.userId = firebase.auth().currentUser.uid;
    this.getTodos();
  }

  ngOnInit() {
  }

  getTodos() {

    firebase.firestore().collection("todos")
    .where("owner", "==", this.userId)
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

}
