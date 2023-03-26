import { createAction, props } from '@ngrx/store';
import { UserAuthenticatedModel } from './user-authenticated.model';

export const setUserAuthenticated = createAction(
  '[UserAuthenticated] Set user authenticated',
  props<{ data: UserAuthenticatedModel }>()
);
