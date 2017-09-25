import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public alertCtrl: AlertController) {
     this.showAlert();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Olá Amigo!',
      subTitle: 'Seja bem vindo!',
      buttons: ['OK']
    });
    alert.present();
  }
}
