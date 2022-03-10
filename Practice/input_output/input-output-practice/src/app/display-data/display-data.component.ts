import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  //this component is reciving data from the parent component since we are displaying the info from the myPets array that
  //lives in app.component. we need to use th @Input decorator to input data into this component 
  @Input('petElement') element:{animal:string,name:string,behavior:string};
  @Input() index_number:number;
  

  image_url:string;
  //you can think of this as setting up an Object that represents a single element in the Object array that is myPets
  //doing this allows us to use the properties on this Input variable in this components HTML template

 

  imageArray:string[] = ["https://styles.redditmedia.com/t5_49gk9b/styles/communityIcon_wjqpk9z5zd081.png",
  "https://i.pinimg.com/474x/27/38/0b/27380bc38ef6377387082b973742ce00.jpg",
  "https://na.cdn.beatsaver.com/1db9f82793b51bb3a2e21368792d9eb370214f3b.jpg"
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("Number: "+this.index_number);
  }



}
