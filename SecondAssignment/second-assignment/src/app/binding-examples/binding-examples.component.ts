import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})
export class BindingExamplesComponent implements OnInit {
  username:string = '';
  active_button = false;

  constructor() {}

  ngOnInit(): void {
  }

  onUsernameClear() {
    this.username = '';
  }

  disableButton() {
    if(this.username === '') {
      return true;
    }else{
      return false;
    }
  }

}
