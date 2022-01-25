import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Zinger Burger', 'The mighty zinger burger recipe', 'https://recipefairy.com/wp-content/uploads/2020/08/kfc-zinger-burger.jpg', [
            new Ingredient('Bun', 2),
            new Ingredient('Chicken', 2),
        ]),
        new Recipe(
            'Pizza',
            'Recipe for deliciously spicy pizza',
            'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
            [new Ingredient('Pizza Bread', 1), new Ingredient('Cheese', 2)]
        ),
    ];

    constructor(private slServices: ShoppingListService) {}

    getRecipes() {
        // return a copy of recipes
        return this.recipes.slice();
    }

    // Function that will use shopping list service to add the ingredients
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slServices.addIngredients(ingredients);
    }
}
