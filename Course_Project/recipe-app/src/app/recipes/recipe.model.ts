//this is a basic setup for a model
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    //adding a constructor so that we can inialize it the a keyword and pass arguments to it
    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}