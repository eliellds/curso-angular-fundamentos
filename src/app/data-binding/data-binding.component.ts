import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public nome: string = 'Eliel';
  public idade: number = 27;
  public maisUm: number = 1;
  
  public checkedDisabled: boolean = false;
  public imgSrc: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWild_BsdjGwo8RJtE3PDH2rP2oN3AGYsK1SPwZrtHRiRE2SZBz3WD8jeR8CLUSB_kqIc&usqp=CAU';
  public imgTitle: string = 'Zelda Property Binding';

  public position: {x: number, y: number} = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
