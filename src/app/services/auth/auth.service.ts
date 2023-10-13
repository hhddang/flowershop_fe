import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor/interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private injector: Injector
  ) {}

  public getToken() {
    return localStorage.getItem('token');
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public removeToken() {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  public logout() {
    this.removeToken();
    this.router.navigateByUrl('/home');
  }

  public logIn(email: string, password: string) {
    this.httpClient
      .post<{ token: string }>(`${environment.backendUrl}/api/users/login`, {
        email,
        password,
      })
      .subscribe(({ token }) => {
        this.setToken(token);
      });
    this.router.navigateByUrl('/home');
  }
}
