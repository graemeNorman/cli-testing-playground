import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UniversalCardComponent } from './universal-card/universal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversalCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
