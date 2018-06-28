import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { GraphicsRoutingModule } from "./graphics-routing.module";
import { GraphicsComponent } from "./graphics.component";

//import * as chartModule from "nativescript-ui-chart";
import {  NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
//import { platformNativeScriptDynamic } from "nativescript-angular/platform";
//import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        GraphicsRoutingModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        GraphicsComponent,
        //NativeScriptUIChartModule
        
    ],
    providers:[
        NativeScriptUIChartModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GraphicsModule { }

//platformNativeScriptDynamic().bootstrapModule(GraphicsModule);
