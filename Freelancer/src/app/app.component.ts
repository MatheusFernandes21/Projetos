import {Component, OnInit } from '@angular/core';     
import { FormsModule } from '@angular/forms';       

class Projeto {
  public nomeProjeto: string;
  public salarioDesejado: number;
  public horasAnalise: number; 
  public horasDesenvolvimento: number;
  public horasTeste: number; 
  public valorProjeto: string;  
}
    
@Component({    
  selector: 'app-root',    
  templateUrl: './app.component.html',    
  styleUrls: ['./app.component.css']    
}) 

export class AppComponent  {    
    
  // Usado para especificar o título através da Interpolação    
  title = 'Freelancer';    
    
  // Vetor onde é feita as operações CRUD.
  meusProjetos: Projeto[] = new Array();    
    
  // Variaveis auxiliares    
  IsForUpdate: boolean = false;    
  novoProjeto: Projeto;    
  updatedItem;   
  nomeProjeto: string; 
  salarioDesejado: number;  
  horasAnalise: number;   
  horasDesenvolvimento: number;   
  horasTeste: number;   
  valorProjeto: number;
  tempo: number;      
   
  constructor(){}  
  
  // Para adicionar um novo item no vetor    
  AddItem() {    
    this.novoProjeto = new Projeto();

    //(Salário que eu quero ganhar) + (FGTS) + (1/12 Décimo terceiro) + (1/3 Salário férias)
    this.valorProjeto = +(this.salarioDesejado) + ((this.salarioDesejado / 100) * 11) + (this.salarioDesejado / 12) + (this.salarioDesejado / 3)

    // X / 160 (Quantidade de horas de um mês)
    this.valorProjeto = +this.valorProjeto / 160;  

    // (Valor da hora/trabalho) + 75% 
    this.valorProjeto = +this.valorProjeto + (this.valorProjeto / 100) * 75; 

    // X * (Soma das horas gastas)
    this.tempo = (+this.horasAnalise) + (+this.horasDesenvolvimento) + (+this.horasTeste)
    this.novoProjeto.valorProjeto = (+this.valorProjeto * this.tempo).toFixed(2)

    this.novoProjeto.nomeProjeto = this.nomeProjeto;
    this.novoProjeto.salarioDesejado = this.salarioDesejado;
    this.novoProjeto.horasAnalise = this.horasAnalise;
    this.novoProjeto.horasDesenvolvimento = this.horasDesenvolvimento;
    this.novoProjeto.horasTeste = this.horasTeste;

    this.meusProjetos.push(    
      this.novoProjeto    
    );    

    this.novoProjeto = null;    
    alert("Projeto adicionado com sucesso!");
  }   

  // Para selecionar um determinado projeto
  EditItem(i) {  
    debugger;
    this.novoProjeto = new Projeto();
    // this.novoProjeto.valorProjeto = this.meusProjetos[i].valorProjeto;
    this.nomeProjeto = this.meusProjetos[i].nomeProjeto;
    this.salarioDesejado = this.meusProjetos[i].salarioDesejado;
    this.horasAnalise = this.meusProjetos[i].horasAnalise
    this.horasDesenvolvimento = this.meusProjetos[i].horasDesenvolvimento
    this.horasTeste = this.meusProjetos[i].horasTeste;
    this.updatedItem = i;  
    this.IsForUpdate = true;  
    event.preventDefault()

    alert("Você selecionou o projeto:" + this.meusProjetos[i].nomeProjeto);
  }  
  
  // Para atualizar o projeto selecionado  
  UpdateItem() {  
    debugger;
    let data = this.updatedItem;  
    for (let i = 0; i < this.meusProjetos.length; i++) {  
      if (i == data) {  
        this.meusProjetos[i].valorProjeto = this.UpdateValor();
        this.meusProjetos[i].nomeProjeto = this.nomeProjeto;
        this.meusProjetos[i].salarioDesejado = this.salarioDesejado;
        this.meusProjetos[i].horasAnalise = this.horasAnalise;
        this.meusProjetos[i].horasDesenvolvimento = this.horasDesenvolvimento;
        this.meusProjetos[i].horasTeste = this.horasTeste;
      }  
    }  
    this.IsForUpdate = false;  
    this.novoProjeto = null;  
    event.preventDefault()

    alert("Projeto atualizado com sucesso!");
  }  

  UpdateValor(){
    this.novoProjeto = new Projeto();

    //(Salário que eu quero ganhar) + (FGTS) + (1/12 Décimo terceiro) + (1/3 Salário férias)
    this.valorProjeto = +(this.salarioDesejado) + ((this.salarioDesejado / 100) * 11) + (this.salarioDesejado / 12) + (this.salarioDesejado / 3)

    // X / 160 (Quantidade de horas de um mês)
    this.valorProjeto = +this.valorProjeto / 160;  

    // (Valor da hora/trabalho) + 75% 
    this.valorProjeto = +this.valorProjeto + (this.valorProjeto / 100) * 75; 

    // X * (Soma das horas gastas)
    this.tempo = (+this.horasAnalise) + (+this.horasDesenvolvimento) + (+this.horasTeste)
    this.novoProjeto.valorProjeto = (+this.valorProjeto * this.tempo).toFixed(2)

    return this.novoProjeto.valorProjeto;
  }

  // Para excluir o projeto selecionado
  DeleteItem(i) { 
    debugger; 
    this.meusProjetos.splice(i, 1);  
    event.preventDefault()

    alert("Projeto excluído com sucesso!");
  }  
}    