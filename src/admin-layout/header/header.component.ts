import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { GcmModalService } from '@eklipse/components/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private _modal: GcmModalService) {}

  private _userFullName = '';

  public toggleTheme(): void {
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme');

    if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
      localStorage.setItem('dark-theme', 'true');
    } else {
      localStorage.removeItem('dark-theme');
    }
  }

  public onLogout(): void {
    this._modal.confirm('¿Desea cerrar su sesión?', '¿Seguro?').subscribe(result => {
      if (result) {
        localStorage.clear();
        location.reload();
      }
    });
  }

  get userFullName(): string {
    return this._userFullName.length > 20
      ? `${this._userFullName.slice(0, 20)}...`
      : this._userFullName;
  }
}
