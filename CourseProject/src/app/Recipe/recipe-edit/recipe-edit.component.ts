import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { AppState } from 'src/app/store/app.store';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AddRecipe, UpdateRecipe } from '../store/recipe.action';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number
  editmode = false

  form: FormGroup

  constructor(private route: ActivatedRoute, private recipeService:RecipeService,private router:Router, private store:Store<AppState>) { }

  ngOnInit(): void {
    

    this.route.params.subscribe((params)=>{
      this.id = +params['id']
      this.editmode = params['id'] != null
      this.initForm()
    })

    
  }

  initForm(){
    let recipeName :String =''
    let desc :String =''
    let imgUrl:String = ''
    let ingredients = new FormArray([])
    if(this.editmode){
      
      let recip;
      this.store.select('recipe').pipe(
        map((recipeState)=>{return recipeState.recipes.find((recipe,index)=>{
          return index === this.id;
        })})
      ).subscribe((recipe) =>{ recip= recipe })
      
      recipeName = recip.name;
      desc =  recip.description
      imgUrl = recip.imagePath

      if(recip['ingredient']){
        for (let ingredient of recip.ingredient){
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }

    }

    this.form = new FormGroup({
      'recipeName' : new FormControl(recipeName, Validators.required),
      'description' : new FormControl(desc,Validators.required),
      'imageUrl' : new FormControl(imgUrl),
      'ingredient': ingredients
    })
  }
  onSubmit(){
    const recipe = new Recipe(this.form.value.recipeName,this.form.value.description,this.form.value.imageUrl,this.form.value.ingredient);
    if(!this.editmode){
      this.store.dispatch(new AddRecipe(recipe));
    }else{
      //this.recipeService.update(this.id,recipe)
      this.store.dispatch(new UpdateRecipe({index:this.id,recipe:recipe}));
      this.router.navigate(['recipes',this.id]);
    }
    this.onClear()

  }

  getIngredientControl(){
    return (<FormArray>this.form.get('ingredient')).controls
  }

  onRemoveIngredient(i:number){
    (<FormArray>this.form.get('ingredient')).removeAt(i)
  }

  onClear(){
    if(!this.editmode){
     this.form.reset()
    }else{
      this.router.navigate(['recipes',this.id]);
    }
  }

  addIngredient(){
    (<FormArray>this.form.get('ingredient')).push(new FormGroup({
      'name':new FormControl(null, Validators.required),
      'amount' : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

}
