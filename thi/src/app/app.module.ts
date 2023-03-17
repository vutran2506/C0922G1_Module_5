import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";

import {ReactiveFormsModule} from "@angular/forms";
import { CoachListComponent } from './component/coach-list/coach-list.component';
import { CoachEditComponent } from './component/coach-edit/coach-edit.component';
import { CoachCreateComponent } from './component/coach-create/coach-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CoachListComponent,
    CoachEditComponent,
    CoachCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
