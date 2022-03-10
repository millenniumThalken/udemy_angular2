//adding Input to the import list so that we can have parent components access elements within this component
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //in the HTML template we are trying to access the element variable. Here it will be created
  @Input('srvElement') element:{type:string, name:string, content:string}; //JavaScript Object denoted by curly braces
  //by adding the @Input decorator you have made that element accessable to parent components of this component
  //alias can be assigned to @Input, srvElement is the alias of element.

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
