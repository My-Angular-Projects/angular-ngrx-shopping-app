import { inject, Injectable } from '@angular/core';
import { Ingredient, IRecipe } from '../types';
import { Subject } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly shoppingListService = inject(ShoppingListService);

  private recipesChanged = new Subject<IRecipe[]>();
  private recipes: IRecipe[] = [];

  public setRecipes(recipes: IRecipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  public getRecipes(): IRecipe[] {
    return this.recipes.slice();
  }

  public getRecipe(index: number): IRecipe {
    return this.recipes[index];
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  public addRecipe(recipe: IRecipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: IRecipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  public deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
