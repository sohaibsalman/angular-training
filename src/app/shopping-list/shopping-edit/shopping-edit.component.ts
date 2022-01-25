import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputField!: ElementRef;
    @ViewChild('amountInput') amountInputField!: ElementRef;

    constructor(private slService: ShoppingListService) {}

    ngOnInit(): void {}

    onAddClick() {
        const ingredient = new Ingredient(this.nameInputField.nativeElement.value, this.amountInputField.nativeElement.value);
        this.slService.addIngredient(ingredient);
    }
}
