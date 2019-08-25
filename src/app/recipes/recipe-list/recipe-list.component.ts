import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://svgsilh.com/svg/1717162.svg'),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://svgsilh.com/svg/1717162.svg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
