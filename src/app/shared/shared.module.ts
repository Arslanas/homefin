import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { LoaderAnimComponent } from './component/loader-anim/loader-anim.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoaderAnimComponent
  ],
  declarations: [LoaderAnimComponent]
})
export class SharedModule {

}
