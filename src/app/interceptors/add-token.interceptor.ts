import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { STORAGE_KEYS } from '../app.config';

@Injectable({ providedIn: 'root' })
export class AddTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(STORAGE_KEYS.authToken);

    if (req.url.includes(`${environment.apiUrl}/`)) {
      token = localStorage.getItem(STORAGE_KEYS.authToken)!;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'Application/json',
    });
    const authReq = req.clone({
      headers: headers,
    });

    return next.handle(authReq);
  }
}
