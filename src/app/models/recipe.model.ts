import { Ingredient, IRecipe } from '../types';

export class RecipeModel implements IRecipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[],
  ) {}
}
