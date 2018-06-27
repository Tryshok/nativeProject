import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CalculatedDataRoutingModule } from "./calculatedData-routing.module";
import { CalculatedDataComponent } from "./calculatedData.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CalculatedDataRoutingModule
    ],
    declarations: [
        CalculatedDataComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CalculatedDataModule { }
