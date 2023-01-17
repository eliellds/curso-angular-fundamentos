import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() 
  public title: string = 'Bem-vindo!';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('Componente destruído!')
  }

}
