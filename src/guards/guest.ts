import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { STORAGE_KEYS } from '../app.config';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem(STORAGE_KEYS.authToken)) {
      this._router.navigate(['home']);
      return false;
    }

    return true;
  }
}
