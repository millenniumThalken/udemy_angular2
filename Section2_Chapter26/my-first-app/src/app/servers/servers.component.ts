import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  
  //you can change the selector to be selecting by attribute
  //selector: '[app-servers]',

  //you can change the selector to be a class
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
