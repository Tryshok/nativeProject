import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DevicesRoutingModule } from "./devices-routing.module";
import { DevicesComponent } from "./devices.component";

import { RestProvider } from '../rest/rest';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        DevicesRoutingModule,
    ],
    declarations: [
        DevicesComponent
    ],
    providers: [
        RestProvider
      ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DevicesModule { }
