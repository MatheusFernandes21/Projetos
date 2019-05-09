import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combustivel',
  templateUrl: './combustivel.page.html',
  styleUrls: ['./combustivel.page.scss'],
})
export class CombustivelPage implements OnInit {

  resultado: string;

  constructor() { }

  ngOnInit() {
  }

  calcular(gasolina: number, etanol: number){
    if(etanol/gasolina <= 0.7){
      this.resultado = 'Etanol';
    }
    else{
      this.resultado = 'Gasolina';
    }
  }
}
