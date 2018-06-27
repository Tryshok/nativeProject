import { Component, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { RouterExtensions } from "nativescript-angular/router";
import { map } from "rxjs/operators";
import { NavigationExtras } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "oneDevice", loadChildren: "./oneDevice/oneDevice.module#OneDeviceModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "OneDevice",
    moduleId: module.id,
    templateUrl: "./oneDevice.component.html"
})
export class OneDeviceComponent implements OnInit {

    lastRawData : any ;
    allCalculatedData : any ;
    rawDataAvailable : any;
    metricsAvailable : any;
    calculatedDataId : any;
    navigationExtras: NavigationExtras ;
    calculatedCustom : any;
    idDevice : any;

    constructor(private http: Http, private routerExtensions : RouterExtensions, private route: ActivatedRoute) { 
        this.metricsAvailable = false;
        this.rawDataAvailable = false;

        this.route.queryParams.subscribe((params) => {
        this.idDevice = params["id"];
        });
    }

    ngOnInit(): void {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        
        //LAST RAW DATA
        this.http.get("http://10.113.128.158:8080/project_dev/api/devices/"+ this.idDevice +"/lastmetric" , options).pipe(map(res => res.json()))
        .subscribe(res => {
            this.lastRawData = res;
        },
            error => {
                console.log("error retrieving metric data");
            });
            this.rawDataAvailable= true;

        //ALL CALCULATED DATA
        this.http.get("http://10.113.128.158:8080/project_dev/api/calculatedmetrics" , options).pipe(map(res => res.json()))
        .subscribe(res => {
            this.allCalculatedData = res;
            console.log("allCalculatedData");
            console.log(this.allCalculatedData);
            this.metricsAvailable = true;
        },
            error => {
                console.log("error retrieving metric data");
            });
            
    }

    onItemTapOneDevice(args) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
            "id": this.allCalculatedData[args.index].id
            }
        };
        console.log("navigationExtras");
        console.log(navigationExtras);
        this.routerExtensions.navigate(['/calculatedData'], navigationExtras)
    }

    

    
/*
    showCalculatedData(calculatedDataId){

         var navigationOptions= {param1: calculatedDataId};
    
        this.routerExtensions.navigate(['/calculatedData'], navigationOptions);
    }*/
}
