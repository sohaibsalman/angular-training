import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe',
            'Test Description for recipe 1',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
        ),
        new Recipe(
            'Another Test Recipe',
            'Test Description for recipe 1',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
        ),
    ];

    getRecipes() {
        // return a copy of recipes
        return this.recipes.slice();
    }
}