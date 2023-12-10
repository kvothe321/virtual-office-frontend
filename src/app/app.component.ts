import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Agora} from "./agora/agora.component";
import {OfficeComponent} from "./office/office.component";
import { LoginComponent } from "./login/login.component"
import { SignupComponent } from './signup/signup.component';
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Agora, OfficeComponent, LoginComponent, SignupComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'virtual-office-frontend';
}
