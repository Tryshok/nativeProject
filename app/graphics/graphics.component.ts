import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/apiServices'
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationExtras, ActivatedRoute } from "@angular/router";
import * as tnsOAuthModule from 'nativescript-oauth';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import {  NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

@Component({
    selector: "Graphics",
    moduleId: module.id,
    templateUrl: "./graphics.component.html"
})
export class GraphicsComponent implements OnInit {

    idDevice : any;
    userName : any;
    urlCalculatedData : any;
    allCalculatedData : any;
    pageData : any;
    //private _categoricalSource: ObservableArray<Country>;

    constructor(private test: NativeScriptUIChartModule , private apiServices : ApiService, private routerExtensions : RouterExtensions, private route: ActivatedRoute) { 
        this.route.queryParams.subscribe((params) => {
            this.idDevice = params["id"];
            this.userName = params["userName"];
        });
    }

    ngOnInit(): void {
       this.urlCalculatedData =  "http://10.113.128.158:8080/project_dev/api/calculatedmetrics?id_device=" + this.idDevice;
        
        this.apiServices.get(this.urlCalculatedData).subscribe(res => {
            this.allCalculatedData = res;
            console.log(this.allCalculatedData);
        },
            error => {
                console.log("error retrieving devices");
            });

        //this._categoricalSource = new ObservableArray(this.getCategoricalSource());
    }

    /*get categoricalSource(): ObservableArray<Country> {
        console.log(this._categoricalSource);
        return this._categoricalSource;
    }

    getCategoricalSource(): Country[] {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }*/

    logOut(){
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }

    
}
/*
export class Country {
    constructor(public Country?: string, public Amount?: number, public SecondVal?: number, public ThirdVal?: number, public Impact?: number, public Year?: number) {
    }
}*/
