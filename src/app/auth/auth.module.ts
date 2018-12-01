import {NgModule} from "@angular/core";
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    AboutComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {

}
