import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController) {

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
}
