import { Ingredient } from './ingredient.interface';

export interface IRecipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
