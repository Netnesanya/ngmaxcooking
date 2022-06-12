import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'simply test', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
