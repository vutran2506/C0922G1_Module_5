import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { ProductManagementComponent } from './product_management/product-management/product-management.component';
import { CreateProductComponent } from './product_management/create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { TranslateComponent } from './dictionary/translate/translate.component';
import { EditProductComponent } from './product_management/edit-product/edit-product.component';
import { DeleteProductComponent } from './product_management/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductManagementComponent,
    CreateProductComponent,
    DictionaryPageComponent,
    TranslateComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
