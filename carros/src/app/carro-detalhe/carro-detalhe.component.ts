import { Component, OnInit, Input } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CARROS } from '../mock-carros';

@Component({
  selector: 'app-carro-detalhe',
  templateUrl: './carro-detalhe.component.html',
  styleUrls: ['./carro-detalhe.component.css']
})
export class CarroDetalheComponent implements OnInit {

  @Input() carro: Carro;

  constructor(
    private rout: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.rout.snapshot.paramMap.get('id');
    this.carro = CARROS.find( c => c.id === id);
  }

}
