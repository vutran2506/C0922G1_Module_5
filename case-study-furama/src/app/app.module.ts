import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ContentComponent } from './layout/content/content.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContentComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
