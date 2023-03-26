import { Action, createReducer, on } from '@ngrx/store';
import * as UserAuthenticatedActions from './user-authenticated.actions';
import { UserAuthenticatedModel } from './user-authenticated.model';

export const userAuthenticatedFeatureKey = 'userAuthenticated';

export const initialState: UserAuthenticatedModel = {
  token: '',
  name: '',
  authorities: [],
};

export const userAuthenticatedReducer = createReducer(
  initialState,

  on(UserAuthenticatedActions.setUserAuthenticated, (state, { data }) => {
    return { ...data };
  })
);
