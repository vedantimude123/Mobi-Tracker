import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  type: boolean = true;  // Controls password visibility
  loginData = {  // Renamed object property
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  handleLogin() {  // Renamed method
    // Implement your login logic here
    // If login is successful, redirect to the home page:
    this.router.navigate(['/home']);
  }

  changeType() {
    this.type = !this.type;
  }

  goToForget() {
    // Navigate to the forgot password page
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    // Navigate to the registration page
    this.router.navigate(['/register']);
  }
}
