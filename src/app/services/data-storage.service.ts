import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { RecipeService } from './recipe.service';
import { IRecipe } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private readonly http = inject(HttpClient);
  private readonly recipeService = inject(RecipeService);

  public storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://angular-test-fd57f-default-rtdb.firebaseio.com/recipes.json',
        recipes,
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  public fetchRecipes(): Observable<IRecipe[]> {
    return this.http
      .get<
        IRecipe[]
      >('https://angular-test-fd57f-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        }),
      );
  }
}
