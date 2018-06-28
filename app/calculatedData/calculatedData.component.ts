import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/apiServices'
import * as tnsOAuthModule from 'nativescript-oauth';

@Component({
    selector: "CalculatedData",
    moduleId: module.id,
    templateUrl: "./calculatedData.component.html"
})
export class CalculatedDataComponent implements OnInit {

    calculatedDataAvailable : any;
    calculatedData : any;
    idDevice : any;
    urlCalculatedData : any;
    userName : any;

    constructor(private apiServices : ApiService, private routerExtensions : RouterExtensions, private route: ActivatedRoute) { 
        this.calculatedDataAvailable = false;
        this.route.queryParams.subscribe((params) => {
            this.idDevice = params["id"];
            this.userName = params["userName"];
        });
    }

    ngOnInit(): void {
        this.urlCalculatedData = "http://10.113.128.158:8080/project_dev/api/calculatedmetrics/" + this.idDevice;

        this.apiServices.get(this.urlCalculatedData).subscribe(res => {
            this.calculatedData = res;
        },
            error => {
                console.log("error retrieving devices");
            });
            this.calculatedDataAvailable = true;
    }

    logOut(){
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }
}
