import {Route, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../shared/shared.module";
import {AboutComponent} from "./about/about.component";

const routes: Route[] = [
  {
    path: '', component: AuthComponent, children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'about', component: AboutComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
