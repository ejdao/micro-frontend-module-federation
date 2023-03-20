import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { UserAuthenticatedStore } from '@app/stores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, OnDestroy {
  private _obs!: Subscription;
  constructor(private userAuthenticated: UserAuthenticatedStore) {}

  public ngOnInit(): void {
    this._obs = this.userAuthenticated.observable().subscribe(_ => {
      console.log(_);
    });

    setTimeout(() => {
      this.userAuthenticated.dispatch({
        token: 'aaaaa',
        name: 'aaaaa',
        authorities: [],
      });
    }, 2000);

    setTimeout(() => {
      this.userAuthenticated.dispatch({
        token: 'bbbbb',
        name: 'bbbbb',
        authorities: ['4001'],
      });
    }, 4000);

    document.title = 'Module Federation | Home';
  }

  public ngOnDestroy(): void {
    this._obs.unsubscribe();
  }
}
