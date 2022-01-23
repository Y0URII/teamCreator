import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Views/admin-page/admin-page.component';
import { AuthComponent } from './Views/auth/auth.component';
import { HomeComponent } from './Views/home/home.component';
import {InvitComponent} from "./Views/invit/invit.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'invit/:link', component: InvitComponent },
  { path: 'admin', component: AdminPageComponent},
  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
