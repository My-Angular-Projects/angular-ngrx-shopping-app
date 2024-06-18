import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, DataStorageService, RecipeService } from '../../services';
import { DropdownDirective } from '../../directives';
import { DestroyHelper } from '../../helpers';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'shop-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly dataStorageService = inject(DataStorageService);
  private readonly recipeService = inject(RecipeService);

  private readonly destroy$ = DestroyHelper();

  public isAuthenticated = false;

  public onSaveData(): void {
    const recipes = this.recipeService.getRecipes();

    this.dataStorageService
      .storeRecipes(recipes)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  public onFetchData(): void {
    this.dataStorageService
      .fetchRecipes()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
