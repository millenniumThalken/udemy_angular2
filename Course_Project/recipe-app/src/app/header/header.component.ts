import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  @Output() navigate = new EventEmitter<string>();

  whereTo:string;

  constructor() { }

  ngOnInit(): void {
  }

  //a very easy way of creating a toggle effect on a click property
  toggleHamburger() {
    this.collapsed = !this.collapsed
  }

  navToRecipes(){
    this.whereTo = 'recipes';
    this.navigate.emit(this.whereTo);

  }

  navToShopping(){
    this.whereTo = 'shopping';
    this.navigate.emit(this.whereTo);
  }

}
