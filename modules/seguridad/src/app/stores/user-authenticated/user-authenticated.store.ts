import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './user-authenticated.actions';
import { userAuthenticatedState } from './user-authenticated.selectors';
import { UserAuthenticatedModel } from './user-authenticated.model';

@Injectable({ providedIn: 'root' })
export class UserAuthenticatedStore {
  constructor(private store: Store<UserAuthenticatedModel>) {}

  public dispatch(userAuthenticated: UserAuthenticatedModel): void {
    this.store.dispatch(
      actions.setUserAuthenticated({
        data: {
          token: userAuthenticated.token,
          name: userAuthenticated.name,
          authorities: userAuthenticated.authorities,
        },
      })
    );
  }

  public observable(): Observable<UserAuthenticatedModel> {
    return this.store.select(userAuthenticatedState as any);
  }
}
