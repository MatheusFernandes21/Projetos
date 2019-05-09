import { Component, OnInit } from '@angular/core';
import { CARROS } from '../mock-carros';
import { Carro } from '../carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros = CARROS;
  selectcarro;


  constructor() { }

  ngOnInit() {
  }

  onselect(pcarro: Carro): void{
    this.selectcarro = pcarro;
  }

}
