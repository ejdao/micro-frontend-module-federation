import { Action, createReducer, on } from '@ngrx/store';
import * as UserAuthenticatedActions from './user-authenticated.actions';

export const userAuthenticatedFeatureKey = 'userAuthenticated';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(UserAuthenticatedActions.userAuthenticatedUserAuthenticateds, state => state),
  on(UserAuthenticatedActions.userAuthenticatedUserAuthenticatedsSuccess, (state, action) => state),
  on(UserAuthenticatedActions.userAuthenticatedUserAuthenticatedsFailure, (state, action) => state)
);
