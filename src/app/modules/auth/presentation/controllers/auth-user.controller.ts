import { Injectable } from '@angular/core';
import { LoginPayload, LoginResponse } from '@app/auth/application/data-transfers';
import { AuthUserService } from '@app/auth/application/services';
import { Either } from '@eklipse/utilities';

type Result = Either<boolean, LoginResponse>;

@Injectable()
export class AuthUserController {
  constructor(private _authUser: AuthUserService) {}

  public async execute(payload: LoginPayload): Promise<Result> {
    try {
      const response = await this._authUser.execute(payload);

      return Either.right(response);
    } catch (error) {
      return Either.left(false);
    }
  }
}
