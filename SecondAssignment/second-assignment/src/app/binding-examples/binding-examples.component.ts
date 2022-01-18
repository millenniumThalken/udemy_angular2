import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})
export class BindingExamplesComponent implements OnInit {
  username:string = '';
  active_button = false;

  constructor() {
    this.isUserEmpty(this.username);
   }

  ngOnInit(): void {
  }

  isUserEmpty(username:string) {
    if(username == '') {
      this.active_button = true;
    }
    else
    {
      this.active_button = false;
    }
  }

  onUsernameClear() {
    this.username = '';
  }

}
