import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';

import { AuthComponent } from './Views/auth/auth.component';
import { DisconnectBtnComponent } from './Views/disconnect-btn/disconnect-btn.component';
import { HomeComponent } from './Views/home/home.component';
import { GroupComponent } from './Views/group/group.component';
import { UserComponent } from './Views/user/user.component';
import { InvitComponent } from './Views/invit/invit.component';
import { GroupConfigService } from './Services/group-config.service';
import { FormConfigurationComponent } from './Views/admin-page/form-configuration/form-configuration.component';
import { GroupService } from './Services/group.service';
import { UserService } from './Services/user.service';
import { UsersListComponent } from './Views/users-list/users-list.component';
import { GroupsListComponent } from './Views/groups-list/groups-list.component';
import { CreateGroupButtonComponent } from './Views/create-group-button/create-group-button.component';
import { InitializeGroupsButtonComponent } from './Views/initialize-groups-button/initialize-groups-button.component';
import {AdminPageComponent} from "./Views/admin-page/admin-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    DisconnectBtnComponent,
    AdminPageComponent,
    FormConfigurationComponent,
    UsersListComponent,
    GroupsListComponent,
    CreateGroupButtonComponent,
    InitializeGroupsButtonComponent,
    GroupComponent,
    UserComponent,
    InvitComponent,
    GroupComponent,
    FormConfigurationComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [GroupConfigService, GroupService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
