import { Component, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { RouterExtensions } from "nativescript-angular/router";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";


/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "calculatedData", loadChildren: "./calculatedData/calculatedData.module#CalculatedDataModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "CalculatedData",
    moduleId: module.id,
    templateUrl: "./calculatedData.component.html"
})
export class CalculatedDataComponent implements OnInit {

    calculatedDataAvailable : any;
    calculatedData : any;
    idDevice : any;

    constructor(private http: Http, private routerExtensions : RouterExtensions, private route: ActivatedRoute) { 
        this.calculatedDataAvailable = false;

        this.route.queryParams.subscribe((params) => {
        this.idDevice = params["id"];
        console.log("calculated data this.idDevice");
        console.log(this.idDevice);
        });

        
    }

    ngOnInit(): void {
        /*let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        
        
       this.http.get("http://10.113.128.158:8080/project_dev/api/calculatedmetrics/" + this.idDevice + "" , options).pipe(map(res => res.json()))
        .subscribe(res => {
            this.calculatedData = res;
            console.log(this.calculatedData);
        },
            error => {
                console.log("error retrieving metric data");
            });
            this.calculatedDataAvailable = true;*/
    }
}
