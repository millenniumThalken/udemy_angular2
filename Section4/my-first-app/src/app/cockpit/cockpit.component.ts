import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //adding two properties that will bind to the event happening in the app.component.html by creating an EventEmitter 
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  //here I am giving the blueprintCreated Event emitter an alias of 'bpCreated'
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  //the @Output() decorator allows the component to output data to the parent component
  newServerName = '';
  //newServerContent = '';

  //this gives us access to the local reference in the html template
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    //when the button with the onAddServer() method applied to it is pressed the serverCreated event will be emitted
    this.serverCreated.emit({
      serverName:this.newServerName,
      //this is how you access the local reference 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      //this is how you access the local reference 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

}
