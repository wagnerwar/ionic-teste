import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { FilmesPage } from '../filmes/filmes';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'testa',
  templateUrl: 'testa.html'
})
export class TestaPage {
  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'OPÇÕES',
      buttons: [
        {
          text: 'Exibir filmes',
          role: 'Exibir filmes',
          handler: () => {
            console.log('Exibir filmes clicado');
            this.exibeFilmes();
          }
        },
      ]
    });
    actionSheet.present();
  }

  exibeFilmes() {
    this.navCtrl.push(FilmesPage);
  }
}
