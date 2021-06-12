import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth/auth.guard";
import { RecipeClickComponentComponent } from "./recipe-click-component/recipe-click-component.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recipe-resolver.service";
import { RecipeComponent } from "./recipe.component";
import { RecipeDetailComponent } from "./RecipeDetail/recipedetail.component";

const routes =[{path:'recipes', component: RecipeComponent,canActivate:[AuthGuard], children:[
    {path:'', component:RecipeClickComponentComponent},
    {path: 'new', component:RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent, resolve:[RecipeResolverService]},
    {path: ':id/edit', component:RecipeEditComponent, resolve:[RecipeResolverService]}
    
  ]}]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecipeRoutingModule {
    
}