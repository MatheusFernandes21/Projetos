import { Component, OnInit } from '@angular/core';
import { NometecService } from '../nometec.service';

@Component({
  selector: 'app-injecaodp',
  templateUrl: './injecaodp.component.html',
  styleUrls: ['./injecaodp.component.css']
})

export class InjecaodpComponent implements OnInit {

  tecnologias: string[] = [];

  constructor(private meuService: NometecService) { 
    this.tecnologias = meuService.getNomeTec();
  }

  ngOnInit() {
  }



}
