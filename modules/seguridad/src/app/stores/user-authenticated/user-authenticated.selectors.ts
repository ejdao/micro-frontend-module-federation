import { AppState } from '@app/app.state';
import { createSelector } from '@ngrx/store';

export const selectUserAuthenticated = (state: AppState) => state.userAuthenticated;

export const userAuthenticatedState = createSelector(selectUserAuthenticated, state => state);
