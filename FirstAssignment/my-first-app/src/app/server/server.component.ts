//A component is just a JS class
//to use the Component decorator you must import the Component module or Angular wont know what the decorator is 
import { Component } from '@angular/core';

//this is a decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{

}