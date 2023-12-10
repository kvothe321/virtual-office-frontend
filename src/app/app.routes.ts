<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // ... other routes
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import {Routes} from '@angular/router';
import {OfficeComponent} from "./office/office.component";
import {Agora} from "./agora/agora.component";

export const routes: Routes = [
  {path: '', component: OfficeComponent},
  {path: 'call', component: Agora}
];
>>>>>>> c0edd86fc8c9288bd85c857194183a1eab5a1c86
