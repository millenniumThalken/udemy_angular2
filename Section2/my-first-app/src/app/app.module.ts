import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//I created a StartUpComponent that will be used as the first component to be used when the app starts
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
  //this is the bootstrap from main.ts and I am giving it the StartUpComponent as the first/defualt component to use
  bootstrap: [StartUpComponent]
})
export class AppModule { }
