import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//had to add the forms module to be able to use Angular built in stuff to form elements like inputs
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
