import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implement your login logic here
    console.log('Login clicked:', this.username, this.password);
    // You can call a service to handle authentication from here
  }

  goToSignup() {
    this.router.navigate(['/signup']);  // Navigate to the signup page
  }
}
