import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PermissionsGuard implements CanActivate {
  private _permisos: string[] = [];

  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if (environment.production) {
      const canActivate =
        route.data && route.data['permissions']
          ? this._validatePermissions(route.data['permissions'])
          : false;
      if (!canActivate) this._router.navigate(['']);
      return canActivate;
    } else {
      return true;
    }
  }

  private _validatePermissions(permissions: string[]): boolean {
    let canActivate = false;

    permissions.map(_ => {
      if (this._permisos.indexOf(_) >= 0) canActivate = true;
    });

    return canActivate;
  }
}
