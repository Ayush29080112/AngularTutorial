import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoppingComponent } from "./shopping.component";

const routes =[{path:'' , component: ShoppingComponent},]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ShoppingRoutingModule {
    
}