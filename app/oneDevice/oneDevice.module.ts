import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OneDeviceRoutingModule } from "./oneDevice-routing.module";
import { OneDeviceComponent } from "./oneDevice.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        OneDeviceRoutingModule
    ],
    declarations: [
        OneDeviceComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OneDeviceModule { }
