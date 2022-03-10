import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //part of the requirement was to emit an event. To do that you need to create an event emitter
  @Output() intervalFired = new EventEmitter<number>();
  //using the @Output decorator you can make this listenable from outside

  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    //first argurment in setInterval is an arrow function.
    this.interval = setInterval(() => {
    //using the event emitter that was created to emit the number that changes every second  
    this.intervalFired.emit(this.lastNumber + 1);
    this.lastNumber++;  
    },1000);
  }

  onGameStop(){
    clearInterval(this.interval);
  }

}
