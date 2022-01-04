import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartUpComponent } from './start-up/start-up.component';

@NgModule({
  declarations: [
    AppComponent,
    StartUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StartUpComponent]
})
export class AppModule { }
