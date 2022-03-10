import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //the colens in the serverElements are NOT defining types since it is on the right side of the equals sign
  //this is just adding a single object to the array and defining key and value pairs for the object
  serverElements = [{type:'server', name:'Test-Server',content:'Just a test!'}];

  //getting the $event data from the HTML template and passing it to this method as an Object argument.
  //Dataflow: we get the data from the cockpit component by its selector and using event binding and the onServerAdded method
  //    the data is then pushed to the serverElements array which is then passed to the server-element component through property binding to be displayed 
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  


}
