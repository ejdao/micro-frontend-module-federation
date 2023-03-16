import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserAuthenticated from './user-authenticated.reducer';

export const selectUserAuthenticatedState = createFeatureSelector<fromUserAuthenticated.State>(
  fromUserAuthenticated.userAuthenticatedFeatureKey
);
