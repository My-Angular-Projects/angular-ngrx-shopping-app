import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { RecipeService } from './recipe.service';
import { IRecipe } from '../types';

export const API_URL =
  'https://angular-test-fd57f-default-rtdb.firebaseio.com/recipes.json';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private readonly http = inject(HttpClient);
  private readonly recipeService = inject(RecipeService);

  public storeRecipes(): Observable<IRecipe> {
    const recipes = this.recipeService.getRecipes();

    return this.http.put<IRecipe>(API_URL, recipes);
  }

  public fetchRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(API_URL).pipe(
      map((recipes: IRecipe[]) => {
        return recipes.map((recipe: IRecipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes: IRecipe[]) => {
        this.recipeService.setRecipes(recipes);
      }),
    );
  }
}
