import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/apiServices'

//import { NativeScriptHttpModule } from "nativescript-angular/http";
//import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
//import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
//import * as chartModule from "nativescript-ui-chart";
//import {  NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

//import {GraphicsModule} from "./graphics/graphics.module"

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule,
        HttpModule,
        //NativeScriptHttpModule,
        //GraphicsModule
        //NativeScriptUIChartModule
    ],
    declarations: [
        AppComponent,

    ],
    providers :[
        ApiService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
//platformNativeScriptDynamic().bootstrapModule(GraphicsModule);
