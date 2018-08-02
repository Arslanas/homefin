import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./shared/service/user.service";
import {AuthService} from "./shared/service/auth.service";
import {SystemModule} from "./system/system.module";
import {BillService} from "./shared/service/bill.service";
import {CategoryService} from "./shared/service/category.service";
import {EventService} from "./shared/service/event.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    SystemModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService, BillService, CategoryService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
