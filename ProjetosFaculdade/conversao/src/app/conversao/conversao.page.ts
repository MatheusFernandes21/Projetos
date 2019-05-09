import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.page.html',
  styleUrls: ['./conversao.page.scss'],
})
export class ConversaoPage implements OnInit {

  resultado: number;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  conversao(moeda: number, valor: number){
    switch (moeda) {
      case 1:
        this.resultado = valor / 3.90
        break;
      case 2:
        this.resultado = valor / 4.38
        break;
      case 3:
        this.resultado = valor / 15638.37
        break;
      default:
        break;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: '' + this.resultado.toFixed(2) + '',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  // calcular(gasolina: number, etanol: number){
  //   if(etanol/gasolina <= 0.7){
  //     this.resultado = 'Etanol';
  //   }
  //   else{
  //     this.resultado = 'Gasolina';
  //   }
  // }

}
