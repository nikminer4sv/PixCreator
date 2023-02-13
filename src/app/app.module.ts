import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawAreaComponent } from './draw-area/draw-area.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolDependencies } from './toolbar/tools/tool-dependencies';

@NgModule({
  declarations: [
    AppComponent,
    DrawAreaComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [ToolDependencies],
  bootstrap: [AppComponent]
})
export class AppModule { }
