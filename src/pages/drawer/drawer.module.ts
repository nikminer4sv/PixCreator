import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {DrawAreaComponent} from "./components/draw-area/draw-area.component";
import {DrawAreaDirective} from "./directives/draw-area.directive";
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
