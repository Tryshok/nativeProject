import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/apiServices'
import { RestProvider } from './rest/rest'

import { NativeScriptHttpModule } from "nativescript-angular/http";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule,
        HttpModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers :[
        ApiService,
        RestProvider
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
