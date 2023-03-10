import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-data-binding></app-data-binding>
    <app-diretivas-estruturais></app-diretivas-estruturais>

    <app-diretivas-atributos>
      <h1>Aulas de diretivas Atributo</h1>
      <h3>Final da aula</h3>
      <hr>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Eliel Lopes</h1>
      <h3>QSD</h3>
      <hr>
    </app-diretivas-atributos>

    <app-diretivas-atributos></app-diretivas-atributos> 

    <app-new-component></app-new-component>

    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button>

    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h1>{{ getDados.idade }}</h1>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>

    <app-food-add></app-food-add>
    <app-food-list></app-food-list>

    <app-forms></app-forms>

    <router-outlet></router-outlet>

  `
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  public add() {
    this.addValue += 1;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

}
