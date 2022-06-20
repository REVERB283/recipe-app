import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
	providedIn: "root",
})
export class ShoppingListService {
	ingredientSelected = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 15)];

	constructor() {}

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredients(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientSelected.emit(this.ingredients.slice());
	}

	addIngredientsList(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
		this.ingredientSelected.emit(this.ingredients.slice());
	}
}
