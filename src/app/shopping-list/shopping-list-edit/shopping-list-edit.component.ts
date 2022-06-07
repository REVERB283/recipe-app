import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
	selector: "app-shopping-list-edit",
	templateUrl: "./shopping-list-edit.component.html",
	styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent implements OnInit, AfterViewInit {
	@ViewChild("amountRef") amountRef: ElementRef;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		console.log("----- amount -----", this.amountRef);
	}
}
