import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binks-message',
  templateUrl: './binks-message.component.html',
  styleUrls: ['./binks-message.component.css']
})
export class BinksMessageComponent implements OnInit {
  numDogs:any=1;
  constructor() {
    this.numDogs = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
   }

  ngOnInit(): void {
  }

}
