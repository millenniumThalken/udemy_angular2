//A component is just a JS class
//to use the Component decorator you must import the Component module or Angular wont know what the decorator is 
import { Component } from '@angular/core';

//this is a decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    //you can use the method below to add a type to your variable 
    serverID: number = 10;
    //Angular is smart enough to infere there this is type string, but it is always good to give your variables types
    serverStatus = 'offline';

    //here is an example of a method that we will use with String Interpolation
    getServerStatus(){
        return this.serverStatus;
    }

}