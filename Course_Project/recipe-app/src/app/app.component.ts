import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toComponent:string;
  
  navigateToComponent(event_data:string){
    this.toComponent = event_data;
  }
}
