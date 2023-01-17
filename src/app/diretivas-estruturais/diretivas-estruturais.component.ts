import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Eliel Lopes", idade: 27 },
    { nome: "Daniela Silva", idade: 22 },
    { nome: "Isabella Andrade", idade: 26 }
  ];

  public nome: string = "Eliel";
  
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Nayara", idade: 31});
  }

  public onClickEventList(event: number) {
    
    this.list.splice(event, 1);
    
  }

}
