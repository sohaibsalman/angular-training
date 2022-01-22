import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputField!: ElementRef;
    @ViewChild('amountInput') amountInputField!: ElementRef;

    @Output() handleAddIngredient = new EventEmitter<Ingredient>();

    constructor() {}

    ngOnInit(): void {}

    onAddClick() {
        const ingredient = new Ingredient(this.nameInputField.nativeElement.value, this.amountInputField.nativeElement.value);
        this.handleAddIngredient.emit(ingredient);
    }
}
