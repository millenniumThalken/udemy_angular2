import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //first create an array of Objects that will hold all of the pets
  myPets = [];

  transport_number:number;

  //this method takes in an Object that matches our array values. then it takes that object and pushes it to the array or Objects
  onPetAdded(petData:{animalType:string,petName:string,petBehavior:string}){
    this.myPets.push({
      animal:petData.animalType,
      name:petData.petName,
      behavior:petData.petBehavior
    });

  }

  getImgText(number:number) {
    this.transport_number = number;
  }
 
}
