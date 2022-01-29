import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  myMessage = '';
  addNumber:any=1;
  animalArray = [1];
  showBinksIsBetter=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMessage(){
    this.myMessage = "Binks is the best doggo!";
    this.animalArray.push(this.addNumber);
    this.showBinksIsBetter=true;

  }

  clearMessage(){
    this.myMessage = "";
  }

}
