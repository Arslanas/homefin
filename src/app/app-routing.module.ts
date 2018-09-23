import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {PreloadAllModules, Route, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {SystemModule} from "./system/system.module";

const routes: Route[]  = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'system', loadChildren:'./system/system.module#SystemModule'}
  ];
@NgModule({
  imports:[
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
