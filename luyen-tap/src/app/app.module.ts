import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './component/song/song.component';
import { CategoryComponent } from './component/category/category.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FootterComponent } from './layout/footter/footter.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CreateSongComponent } from './component/create-song/create-song.component';
import { EditSongComponent } from './component/edit-song/edit-song.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    CategoryComponent,
    HeaderComponent,
    FootterComponent,
    NavbarComponent,
    CreateSongComponent,
    EditSongComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
