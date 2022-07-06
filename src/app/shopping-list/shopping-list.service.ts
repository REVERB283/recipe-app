import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
	providedIn: "root",
})
export class ShoppingListService {
	ingredientSelected = new Subject<Ingredient[]>();
	private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 15)];

	constructor() {}

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredients(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientSelected.next(this.ingredients.slice());
	}

	addIngredientsList(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
		this.ingredientSelected.next(this.ingredients.slice());
	}
}
