import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {RegistrationComponent} from "../auth/registration/registration.component";
import {SystemComponent} from "./system.component";
import {RecordsPageComponent} from "./records-page/records-page.component";
import {BillingPageComponent} from "./billing-page/billing-page.component";
import {PlanningPageComponent} from "./planning-page/planning-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {HistoryDetailComponent} from "./history-page/history-detail/history-detail.component";

const routes: Route[] = [
  {
    path: '', component: SystemComponent, children: [
      {path: 'records', component: RecordsPageComponent},
      {path: 'billing', component: BillingPageComponent},
      {path: 'planning', component: PlanningPageComponent},
      {path: 'history', component: HistoryPageComponent},
      {path: 'history/:id', component: HistoryDetailComponent}
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
export class SystemRoutingModule {

}
