import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import { AuthComponent } from './Views/auth/auth.component';
import { DisconnectBtnComponent } from './Views/disconnect-btn/disconnect-btn.component';
import { HomeComponent } from './Views/home/home.component';
import { GroupComponent } from './Views/group/group.component';
import { AdminPageComponent } from './Views/admin-page/admin-page.component';
import { GroupConfigService } from './Services/group-config.service';
import { FormConfigurationComponent } from './Views/admin-page/form-configuration/form-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    DisconnectBtnComponent,
    GroupComponent
    AdminPageComponent,
    FormConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [GroupConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
