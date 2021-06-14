import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { ShoppingComponent } from "./shopping.component";
import { ShoppingList } from "./ShoppingList/shoppinlist.component";
import { ShoppingListEdit } from "./ShoppingListEdit/shoppinglistedit.component";

@NgModule({
    imports:[CommonModule,RouterModule,FormsModule,ShoppingRoutingModule],
    declarations:[ ShoppingComponent,
        ShoppingList,
        ShoppingListEdit],
    exports:[ShoppingComponent,
        ShoppingList,
        ShoppingListEdit]
})
export class ShoppingModule{

}