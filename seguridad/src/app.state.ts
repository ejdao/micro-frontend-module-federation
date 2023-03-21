import { ActionReducerMap } from '@ngrx/store';
import { UserAuthenticatedModel, userAuthenticatedReducer } from '@seguridad/stores';

export interface AppState {
  userAuthenticated: Readonly<UserAuthenticatedModel>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  userAuthenticated: userAuthenticatedReducer,
};
