import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/apiServices'
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationExtras, ActivatedRoute } from "@angular/router";
import * as tnsOAuthModule from 'nativescript-oauth';

@Component({
    selector: "OneDevice",
    moduleId: module.id,
    templateUrl: "./oneDevice.component.html"
})
export class OneDeviceComponent implements OnInit {

    idDevice : any;
    urlCalculatedData: any;
    urlRawData: any;
    lastRawData : any ;
    allCalculatedData : any ;
    rawDataAvailable : any;
    metricsAvailable : any;

    constructor(private apiServices : ApiService, private routerExtensions : RouterExtensions, private route: ActivatedRoute) { 
        this.metricsAvailable = false;
        this.rawDataAvailable = false;
        this.route.queryParams.subscribe((params) => {
        this.idDevice = params["id"];
        });
    }

    ngOnInit(): void {
        this.urlRawData = "http://10.113.128.158:8080/project_dev/api/devices/" + this.idDevice +"/lastmetric";
        this.urlCalculatedData =  "http://10.113.128.158:8080/project_dev/api/calculatedmetrics?id_device=" + this.idDevice;
        
        this.apiServices.get(this.urlCalculatedData).subscribe(res => {
            this.allCalculatedData = res;
        },
            error => {
                console.log("error retrieving devices");
            });
            this.metricsAvailable = true;

        this.apiServices.get(this.urlRawData).subscribe(res => {
            this.lastRawData = res;
        },
            error => {
                console.log("error retrieving devices");
            });
            this.rawDataAvailable = true;
    }

    onItemTapOneDevice(args) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
            "id": this.allCalculatedData[args.index].id
            }
        };
        this.routerExtensions.navigate(['/calculatedData'], navigationExtras)
    }

    onTapCommand(){
        console.log("Command Sent to device : " + this.idDevice);
        /*this.url = "http://10.113.128.158:8080/project_dev/api/devices/token/";
            this.msg = {"token" : token};
            this.apiServices.post(this.url, this.msg).subscribe(res => {
                console.log("réponse Olive");
                this.response = res.json();
                console.log(this.response);
            },
                error => {
                    console.log("error retrieving devices");
                });*/
    }

    logOut(){
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }
}
