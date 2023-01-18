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

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
