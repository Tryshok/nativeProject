import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
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

    constructor(private http: Http, private apiServices : ApiService, private routerExtensions : RouterExtensions, private route: ActivatedRoute) { 
        this.calculatedDataAvailable = false;
        this.route.queryParams.subscribe((params) => {
            this.idDevice = params["id"];
        });
    }

    ngOnInit(): void {
        this.urlCalculatedData = "http://10.113.128.158:8080/project_dev/api/calculatedmetrics/" + this.idDevice;

        this.apiServices.get(this.urlCalculatedData).subscribe(res => {
            this.calculatedData = res;
            console.log(this.calculatedData);
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
