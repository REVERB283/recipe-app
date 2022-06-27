import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
	selector: "app-shopping-list-edit",
	templateUrl: "./shopping-list-edit.component.html",
	styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent implements OnInit {
	@ViewChild("nameRef") nameRef: ElementRef;
	@ViewChild("amountRef") amountRef: ElementRef;

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {}

	addIngredient() {
		const name = this.nameRef.nativeElement.value;
		const amount = this.amountRef.nativeElement.value;
		const newIngredient = new Ingredient(name, amount);
		this.shoppingListService.addIngredients(newIngredient);
	}
}
