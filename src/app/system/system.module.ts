import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {SystemComponent} from "./system.component";
import { BillingPageComponent } from './billing-page/billing-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import {SystemRoutingModule} from "./system-routing.module";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from "./shared/directives/dropdown.directive";
import { BillCardComponent } from './billing-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './billing-page/currency-card/currency-card.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import { AddEventComponent } from './records-page/add-event/add-event.component';


@NgModule(
  {
    imports:[
      SystemRoutingModule,
      SharedModule
    ],
    declarations:[
      SystemComponent,
      BillingPageComponent,
      PlanningPageComponent,
      HistoryPageComponent,
      RecordsPageComponent,
      SidebarComponent,
      HeaderComponent,
      DropdownDirective,
      BillCardComponent,
      CurrencyCardComponent,
      AddCategoryComponent,
      EditCategoryComponent,
      AddEventComponent
    ]
  }
)
export class SystemModule {
}
