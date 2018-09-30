import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {UserService} from "./shared/service/user.service";
import {AuthService} from "./shared/service/auth.service";
import {BillService} from "./shared/service/bill.service";
import {CategoryService} from "./shared/service/category.service";
import {EventService} from "./shared/service/event.service";
import {JwtInterceptor} from "./shared/core/JwtInterceptor";
import {TokenStorage} from "./shared/core/tokenStorage.util";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    AuthService,
    BillService,
    CategoryService,
    EventService,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
