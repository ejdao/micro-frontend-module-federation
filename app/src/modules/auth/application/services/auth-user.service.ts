import { LoginPayload, LoginResponse } from '../data-transfers';

export abstract class AuthUserService {
  abstract execute(payload: LoginPayload): Promise<LoginResponse>;
}
