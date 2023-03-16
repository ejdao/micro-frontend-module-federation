import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserAuthenticatedActions from './user-authenticated.actions';

@Injectable()
export class UserAuthenticatedEffects {
  userAuthenticatedUserAuthenticateds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticatedActions.userAuthenticatedUserAuthenticateds),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data =>
            UserAuthenticatedActions.userAuthenticatedUserAuthenticatedsSuccess({ data })
          ),
          catchError(error =>
            of(UserAuthenticatedActions.userAuthenticatedUserAuthenticatedsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
