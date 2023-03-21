import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserAuthenticatedStore } from '@seguridad/stores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'seg-registrar-usuarios',
  templateUrl: './registrar-usuarios.page.html',
  styleUrls: ['./registrar-usuarios.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrarUsuariosPage implements OnInit {
  private _obs!: Subscription;

  constructor(private userAuthenticated: UserAuthenticatedStore) {}

  public ngOnInit(): void {
    this._obs = this.userAuthenticated.observable().subscribe(_ => {
      console.log(_);
    });
  }

  public ngOnDestroy(): void {
    this._obs.unsubscribe();
  }
}
