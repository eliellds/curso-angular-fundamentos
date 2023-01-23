import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe({
      next: (res) => this.foodListService.foodListAlert(res),
      error: (err) => err,
    });
  }

}
