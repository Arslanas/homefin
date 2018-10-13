import {NgModule} from "@angular/core";
import {NgxChartsModule} from "@swimlane/ngx-charts";
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
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FilterPipe} from "./shared/pipes/filter.pipe";
import {CommonModule} from "@angular/common";
import { EditBillCardComponent } from './billing-page/edit-bill-card/edit-bill-card.component';



@NgModule(
  {
    imports:[
      SystemRoutingModule,
      SharedModule,
      NgxChartsModule
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
      AddEventComponent,
      HistoryChartComponent,
      HistoryEventsComponent,
      HistoryDetailComponent,
      HistoryFilterComponent,
      FilterPipe,
      EditBillCardComponent,
    ]
  }
)
export class SystemModule {
}
