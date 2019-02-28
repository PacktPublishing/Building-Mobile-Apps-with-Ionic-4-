import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  todo_title: string;
  todo_description: string;
  todo_last_date: Date;
  todo_owner: string;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {
    this.todo_owner = firebase.auth().currentUser.uid;
  }

  ngOnInit() {
  }

  addTodo() {

    firebase.firestore().collection("todos").add({
      title: this.todo_title,
      description: this.todo_description,
      last_date: new Date(this.todo_last_date),
      owner: this.todo_owner,
      status: "incomplete",
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((docRef) => {
      this.toastCtrl.create({
        message: "ToDo has been added!",
        duration: 2000
      }).then((toast) => {
        toast.present();
        this.navCtrl.goBack();
      })
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })

  }

}
