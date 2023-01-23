import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{ comida: string, preco: string }> = [
    { comida: "X-Salada", preco: "R$10,00" },
    { comida: "X-Bacon", preco: "R$12,00" },
    { comida: "Coxinha", preco: "R$5,00" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {

    if (form.valid) {
      console.log(form.value);
    }
  }

}
