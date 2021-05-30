import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TreatmentsComponent } from "./treatments/treatments.component";

const route =[{path:'treatments',component:TreatmentsComponent}]
@NgModule({

    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class RouteModule{}