import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //since the Recipe model is already created you can use that model instead of having to define a JavaScript Object
  //this is the property we use to access the data within the Recipe Object
  @Input() recipe:Recipe;

  //since we are only interested in capturing the click event we do not need a type in the EventEmitter we can use void 
  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  //We don't need any of the data quite yet, just a pointer to which recipe in the recipe list that was selected
  getSelected() {
    this.selectedRecipe.emit();
  }

}
