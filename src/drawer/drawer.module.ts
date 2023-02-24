import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "./drawer-module/components/toolbar/toolbar.component";
import {DrawAreaComponent} from "./drawer-module/components/draw-area/draw-area.component";
import {DrawAreaDirective} from "./drawer-module/directives/draw-area.directive";
import {ColorPickerModule} from "ngx-color-picker";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DrawerComponent } from './drawer.component';
import {DrawerRoutingModule} from "./drawer-routing.module";
@NgModule({
  declarations: [
    DrawAreaComponent,
    ToolbarComponent,
    DrawAreaDirective,
    DrawerComponent,
  ],
  imports: [
    CommonModule,
    ColorPickerModule,
    FontAwesomeModule,
    DrawerRoutingModule
  ],
})
export class DrawerModule { }
