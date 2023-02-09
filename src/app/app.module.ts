import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawAreaComponent } from './draw-area/draw-area.component';
import { ToolDependecies } from './services/tool.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
  providers: [ToolDependecies],
  bootstrap: [AppComponent]
})
export class AppModule { }
