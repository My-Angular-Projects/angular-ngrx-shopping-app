import { Ingredient } from '../types';

export class IngredientModel implements Ingredient {
  constructor(
    public name: string,
    public amount: number,
  ) {}
}
