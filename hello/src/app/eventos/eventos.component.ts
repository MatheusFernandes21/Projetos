import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  nome = '';

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    alert("Você clicou no botão!");
    console.log("Você clicou no botão!");
  }

  adicionar(texto: string){
    this.nome = texto;
  }

}
