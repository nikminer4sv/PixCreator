import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './components/modal/modal.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        HttpClientModule,
        FontAwesomeModule,
    ],
  exports: [
    HeaderComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
