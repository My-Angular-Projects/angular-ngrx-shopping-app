import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, DataStorageService } from '../../services';
import { DropdownDirective } from '../../directives';

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

  public isAuthenticated = false;

  public onSaveData(): void {
    // TODO: unsubscribe in pipe
    this.dataStorageService.storeRecipes().pipe().subscribe();
  }

  public onFetchData(): void {
    //
  }

  public onLogout(): void {
    //
  }
}
