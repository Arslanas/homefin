import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {Route, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./auth/registration/registration.component";

const routes: Route[]  = [
  {path: '', redirectTo: 'login', pathMatch:'full'}
  ];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
