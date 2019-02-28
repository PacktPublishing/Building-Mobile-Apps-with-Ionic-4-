import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController) {

  }

  async showLoading() {
    let loading = await this.loadingCtrl.create({
      message: "Loading...",
      duration: 5000,
      showBackdrop: true,
      spinner: "lines-small"
    });

    loading.present();
  }

  async showToast() {
    let toast = await this.toastCtrl.create({
      message: "This is a toast notification",
      duration: 5000,
      color: "dark",
      showCloseButton: true,
      closeButtonText: "Close",
      position: "bottom"
    });

    toast.present();
  }

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: "Are you sure?",
      subHeader: "This action cannot be undone!",
      message: "Are you sure that you want to delete this entry from the database? This process is irreversible.",
      inputs: [{
        name: "username",
        type: "text",
        placeholder: "Packt Publishing"
      }, {
        name: "email",
        type: "email",
        placeholder: "support@packt.com"
      }],
      buttons: [{
        text: "Cancel",
        handler: () => {

        }
      }, {
        text: "Delete",
        handler: (data) => {
          console.log(data);
        }
      }]
    })

    alert.present();
  }
}
