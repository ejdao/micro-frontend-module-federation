import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload, LoginResponse } from '@app/auth/application/data-transfers';
import { AuthUserService } from '@app/auth/application/services';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthUserImpl implements AuthUserService {
  constructor(private _http: HttpClient) {}

  public execute(payload: LoginPayload): Promise<LoginResponse> {
    return firstValueFrom(
      this._http.post<LoginResponse>(`${environment.apiUrl}/v1/login`, payload)
    );
  }
}
