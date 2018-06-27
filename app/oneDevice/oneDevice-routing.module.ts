import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OneDeviceComponent } from "./oneDevice.component";

const routes: Routes = [
    { path: "", component: OneDeviceComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OneDeviceRoutingModule { }
