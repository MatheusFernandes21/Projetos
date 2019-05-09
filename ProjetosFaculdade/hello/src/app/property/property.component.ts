import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  title = "Tá muito frio";
  imagem: string = 'https://picsum.photos/600/500?image=1062'

  constructor() { }

  ngOnInit() {
  }

}
