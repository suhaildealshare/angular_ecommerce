import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a description of the test recipe', 'https://live.staticflickr.com/5702/31078600701_812bd6aa88_b.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
