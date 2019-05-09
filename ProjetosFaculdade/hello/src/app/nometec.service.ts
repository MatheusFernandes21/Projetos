import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NometecService {

  tecnologias = ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS'];

  constructor() { }

  getNomeTec(): string[]{
    return this.tecnologias;
  }
}
