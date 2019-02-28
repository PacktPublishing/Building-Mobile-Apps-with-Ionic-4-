import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

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
}
