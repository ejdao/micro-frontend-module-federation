import { createAction, props } from '@ngrx/store';

export const userAuthenticatedUserAuthenticateds = createAction(
  '[UserAuthenticated] UserAuthenticated UserAuthenticateds'
);

export const userAuthenticatedUserAuthenticatedsSuccess = createAction(
  '[UserAuthenticated] UserAuthenticated UserAuthenticateds Success',
  props<{ data: any }>()
);

export const userAuthenticatedUserAuthenticatedsFailure = createAction(
  '[UserAuthenticated] UserAuthenticated UserAuthenticateds Failure',
  props<{ error: any }>()
);
