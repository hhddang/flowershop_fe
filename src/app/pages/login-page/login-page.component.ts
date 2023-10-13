import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = 'abc5@gmail.com';
  password: string = '12345';

  constructor(private authService: AuthService) {}

  checkEmail(): boolean {
    if (this.email.includes('@') && this.email.includes('.')) return true;
    return false;
  }

  login() {
    this.authService.logIn(this.email, this.password);
    console.log(123123123);
    // if (this.checkEmail()) {
    // }
  }
}
