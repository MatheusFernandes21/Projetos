import { Component, OnInit } from '@angular/core';
import { CARROS } from '../mock-carros';
import { Carro } from '../carro';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   carros: Carro[];

  constructor() { }

  ngOnInit() {
      this.getCarros();
  }

  getCarros(): void {
    this.carros=CARROS.slice(1,5);
  }


}
