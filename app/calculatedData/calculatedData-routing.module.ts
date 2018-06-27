import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CalculatedDataComponent } from "./calculatedData.component";

const routes: Routes = [
    { path: "", component: CalculatedDataComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CalculatedDataRoutingModule { }
