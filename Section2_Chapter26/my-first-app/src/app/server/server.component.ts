//A component is just a JS class
//to use the Component decorator you must import the Component module or Angular wont know what the decorator is 
import { Component } from '@angular/core';

//this is a decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})

export class ServerComponent {
    //you can use the method below to add a type to your variable 
    serverID: number = 10;
    //Angular is smart enough to infere there this is type string, but it is always good to give your variables types
    serverStatus = 'offline';

    //constructor is just a method that is ran on component creation 
    constructor() {
        //if the random number generated is more then 0.5 then set serverStatus to online otherwise set it to offline
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    //here is an example of a method that we will use with String Interpolation
    getServerStatus(){
        return this.serverStatus;
    }

    getColor() {
        // if(this.serverStatus == 'online'){
        //     return 'green';
        // }else{
        //     return 'red';
        // }

        //below is the same as above just slightly different syntax
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}