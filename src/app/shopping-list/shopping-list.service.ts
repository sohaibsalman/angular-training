import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        // Returning the copy of ingredients
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // Emit the event to notify the change in array to all the listeners, so that they can update their state
        this.ingredientsChanged.emit(this.getIngredients());
    }
}
