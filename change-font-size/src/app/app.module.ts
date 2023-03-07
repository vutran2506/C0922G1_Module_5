import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './change-font-size/change-font-size.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeFontSizeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
