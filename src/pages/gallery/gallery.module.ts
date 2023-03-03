import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryRoutingModule} from "./gallery-routing.module";
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    GalleryComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
  ]
})
export class GalleryModule { }
