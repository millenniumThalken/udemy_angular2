export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}

//here is a shortcut version
//export class Ingredients {
    //constructor(public name:string, public amount: number){}
//}