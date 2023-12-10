import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  newUsername: string = '';
  newPassword: string = '';

  constructor(private router: Router) {}

  signUp() {
    // Implement user registration logic here
    console.log('Signing up with:', this.fullName, this.email, this.newUsername, this.newPassword);
    // You can send the data to a server for registration/authentication
  }

  goToLogin() {
    this.router.navigate(['/login']);  // Navigate to the login page
  }
}
