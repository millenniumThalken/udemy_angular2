import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //to get this information into recipe-details we need to pass it up one more level
  //ouputting to the parent component and passing along the Recipe Object that was selected
  @Output() recipeDetails = new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    //With the recipes array created of type Recipe. now start populating it with Recipe objects
    //creating a Recipe object with the "new" key word.
    new Recipe('A Test Recipe','This is simply a test','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('Another Test Recipe','This is simply a test','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  //getting the details from the html template and emitting them with the EventEmitter
  getRecipeDetails(details:Recipe) {
    this.recipeDetails.emit(details);
  }

}
