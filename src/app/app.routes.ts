import {Routes} from '@angular/router';
import {OfficeComponent} from "./office/office.component";
import {Agora} from "./agora/agora.component";

export const routes: Routes = [
  {path: '', component: OfficeComponent},
  {path: 'call', component: Agora}
];
