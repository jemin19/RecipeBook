import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A test Recipe', 'This is a test', 'https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg'),
    new Recipe('A test Recipe', 'This is a test', 'https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
