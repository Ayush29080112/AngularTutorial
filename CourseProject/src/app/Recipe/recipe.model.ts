import { Ingredient } from "../Shared/ingredient.model";

export class Recipe{

    public name :String;
    public description :String;
    public imagePath : String;
    public ingredient:Ingredient[]

    constructor(name:String, description:String, imagepath:String, ingreds: Ingredient[]){
        this.name=name;
        this.imagePath = imagepath;
        this.description = description;
        this.ingredient=ingreds

    }
}