import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: String = '';
  password: String = '';

  checkEmail(): boolean {
    if (this.email.includes('@') && this.email.includes('.')) return true;
    return false;
  }

  login() {
    if (this.checkEmail()) {
      // login
    }
  }
}
