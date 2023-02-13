import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawAreaComponent } from './draw-area/draw-area.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolDependencies } from './toolbar/tools/tool-dependencies';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DrawAreaComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    FontAwesomeModule
  ],
  providers: [ToolDependencies],
  bootstrap: [AppComponent]
})
export class AppModule { }
