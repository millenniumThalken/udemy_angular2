import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-practice';
  //without defining an array it will default to type never
  log : any[] = [];
  stamp : any[] = [];

  showSecret=false;

  //basic toggle logic, it just flips the true and false of the variable when a button was clicked
  onToggleDetails() {
    this.showSecret = !this.showSecret;

    //this will push the next incremented number to the array 
    this.log.push(this.log.length + 1);
    
  }

  onToggleDetailIndex() {
    //timestamp being pushed to the array 
    this.stamp.push(new Date());
  }
}
