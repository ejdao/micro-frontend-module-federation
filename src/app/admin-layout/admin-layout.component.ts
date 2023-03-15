import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LAYOUT_RESOURCES_LOADED } from '@jasr-devs/ng-layout';
import { SIDE_NAV } from './admin-layout.navigation';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayoutComponent implements OnInit {
  private _includeBreadcrumbs = true;
  private _authorities!: any[];
  private _context: any;
  private _sidenav = SIDE_NAV;
  private _isLoaded = LAYOUT_RESOURCES_LOADED;

  public ngOnInit(): void {
    this._isLoaded.setValue(true);
  }

  get includeBreadcrumbs() {
    return this._includeBreadcrumbs;
  }

  get authorities() {
    return this._authorities;
  }

  get context() {
    return this._context;
  }

  get sidenav() {
    return this._sidenav;
  }
}
