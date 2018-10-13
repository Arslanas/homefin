import {NgModule} from "@angular/core";
import {PreloadAllModules, Route, RouterModule} from "@angular/router";
import {NotFoundComponent} from "./component/not-found/not-found.component";

const routes: Route[]  = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'system', loadChildren:'./system/system.module#SystemModule'},
  {path: '**', component:NotFoundComponent}
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
