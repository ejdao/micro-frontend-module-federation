import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { GcmToastService } from '@eklipse/components/toast';
import { STORAGE_KEYS } from 'src/app/app.config';
import { AuthUserController } from '../../controllers';
import { LoginForm } from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  public loginForm = new LoginForm();

  private _isAuthenticating = false;

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _auth: AuthUserController,
    private _toast: GcmToastService
  ) {}

  public async clickOnAuthenticate() {
    if (this.loginForm.valid) {
      this._isAuthenticating = true;
      this._cd.markForCheck();

      const result = await this._auth.execute(this.loginForm.model);

      result.fold({
        right: response => {
          localStorage.setItem(STORAGE_KEYS.authToken, response.data);
          this._router.navigate(['home']);
        },
        left: () => {
          this._toast.simpleNotification('Usuario y/o contraseña incorrectas');
        },
      });

      this._isAuthenticating = false;
      this._cd.markForCheck();
    }
  }

  get isAuthenticating(): boolean {
    return this._isAuthenticating;
  }
}
