import { Observable } from 'rxjs';
import { UserAuthenticatedModel } from './user-authenticated.model';

export abstract class UserAuthenticatedStore {
  abstract dispatch(userAuthenticated: UserAuthenticatedModel): void;

  abstract observable(): Observable<UserAuthenticatedModel>;
}
