import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' +
        'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTcxODM0MzAsImV4cCI6MTY5NzE5MDYzMCwidXNlcklkIjoyMCwiZW1haWwiOiJhYmM1QGdtYWlsLmNvbSIsInVzZXJOYW1lIjoiaGRhbmcxIn0.2kO7a55SldNI7iFavJMKwKM7L1aLP_Fc2RQNGBRh08E'
    );
    let authReq = req.clone({
      headers: headers,
    });
    return next.handle(authReq);
  }
}
