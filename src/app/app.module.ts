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
import {UserIdInterceptor} from "./shared/core/userIdInterceptor";
import {AuthGuard} from "./shared/core/AuthGuard";
import { NotFoundComponent } from './component/not-found/not-found.component';
import {ModalDialogModule} from "ngx-modal-dialog";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalDialogModule.forRoot()
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserIdInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
