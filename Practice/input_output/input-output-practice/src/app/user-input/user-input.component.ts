
//make sure you have the Output and EventEmitter modules from core
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  //you can think of it as data is being collected by this component and then being output to the app.component so that he My Pets array can be populted
  //some kind of trigger needs to be hit so that the application knows when to more data to the Array.
  //this trigger is done through event emitters. Emit the data through an output stream.
  @Output('add_to_array') petCreated = new EventEmitter<{animalType:string, petName:string, petBehavior:string}>();
  //above the EventEmitter has a <genertic type> that is a JavaScript Object that matches the Array

  //these are being changed dynamically through 2-way data binding
  newAnimal:string='';
  newPetName:string='';
  newPetBehavior:string='';
  joke_line:string='';
  new_line:string;

  @Output() timer_number = new EventEmitter<number>();

  currentTimer;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //this method will emit the data from the EventEmitter and will assign the new values to the EventEmitter
  //getting the new variable values from our string variables is done from the html template through 2-way data binding
  addNewPet() {
    this.petCreated.emit({animalType:this.newAnimal,petName:this.newPetName, petBehavior:this.newPetBehavior });
  }



  onClear(){
    this.newAnimal = '';
    this.newPetName = '';
    this.newPetBehavior = '';
  }

  Joke(joke){
    this.joke_line = joke.value;
    this.new_line = this.joke_line.toUpperCase();
    if(this.new_line !== "WHO'S THERE" ){
      this.joke_line = "You are suppose to say Who\'s There!";
    }else{
      this.joke_line = "Knonk Knock";
    }

    this.currentTimer = setInterval(() => {
      this.timer_number.emit(this.lastNumber);
      if(this.lastNumber >= 2) {
        this.lastNumber === 0;
      } else {
        this.lastNumber++;
      }
    },500)
  }

}
