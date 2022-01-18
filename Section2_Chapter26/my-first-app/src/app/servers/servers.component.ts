import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  
  //you can change the selector to be selecting by attribute
  //selector: '[app-servers]',

  //you can change the selector to be a class
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //simple property with a boolean value
  allowNewServer = false;
  serverCreationStatus:string = "No Server Was Created!";
  serverName:string='TestServer';

  //the constructor is a method that is ran at the creation of this component
  constructor() {
    //this is a way of creating a typescript function.
    //in the round brackets you give the arguments and in the curly you have the function body 
    setTimeout(() => {
      //we don't have any arguments for this function, but as you can see in the function body we are setting allowNewServer to true after 2000 miliseconds
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    //this is being binded to a button in the HTML, when the button is clicked the 
    //value of serverCreationStatus changes to "Server Was Created" because this methoid is getting
    //called on the click event of the button
    this.serverCreationStatus = 'Server Was Created, Name is ' + this.serverName;
  }

  //the method requires one argument of any data type
  onUpdateServerName(event:Event) {
    console.log(event);
    //some casting has to be done here so the IDE doesn't fuss
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
