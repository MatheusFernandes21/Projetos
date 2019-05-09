import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  nomes: string[] = new Array();

  constructor() {
    this.nomes[0] = 'Gerald';
    this.nomes[1] = 'Aloi';
    this.nomes[2] = 'Claire';
  }

  ngOnInit() {
  }

}
