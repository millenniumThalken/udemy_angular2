import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { BinksMessageComponent } from './binks-message/binks-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    MyButtonComponent,
    BinksMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
