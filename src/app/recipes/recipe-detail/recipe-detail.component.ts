import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe!: Recipe;

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {}

    // Event to be triggered on dropdown add to shopping list selection
    // It will call the recipe service to add the ingredient to shopping list
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
