import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})

export class InterpolationComponent implements OnInit {

  carros: string[] = [ "BMW", "Lamborghini", "Audi" ];

  constructor() { }

  ngOnInit() {
  }

  getCarroFavorito(): string {
    return 'BMW';
  }

  getCarro(posicao: number): string{
    return this.carros[posicao];
  }

}
