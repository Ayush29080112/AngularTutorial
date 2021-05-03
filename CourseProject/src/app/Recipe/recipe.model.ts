export class Recipe{

    public name :String;
    public description :String;
    public imagePath : String;

    constructor(name:String, description:String, imagepath:String){
        this.name=name;
        this.imagePath = imagepath;
        this.description = description;

    }
}