import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, DataStorageService } from '../../services';

@Component({
  selector: 'shop-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly dataStorageService = inject(DataStorageService);

  public isAuthenticated = false;

  public onSaveData(): void {
    //
  }

  public onFetchData(): void {
    //
  }

  public onLogout(): void {
    //
  }
}
