import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AlertComponent } from "../Shared/alert/alert.component";
import { LoadingSpinnerComponent } from "../Shared/loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "../Shared/placeholder/placeholder.directive";
import { AuthComponent } from "./auth/auth.component";

@NgModule({
    declarations:[ AuthComponent,LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective],
    imports:[CommonModule, FormsModule, RouterModule.forChild([{path: 'auth',component:AuthComponent}])]
})
export class AuthModule{

}