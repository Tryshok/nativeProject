import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/apiServices'
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import * as tnsOAuthModule from 'nativescript-oauth';
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
            for(let m in res)
            {
                this.allCalculatedData[m].date = this.allCalculatedData[m].date.split("T",1)[0].split("2018-",2)[1];
            }
            console.log(res);
            return res;
        },
            error => {
                console.log("error retrieving devices");
            });
    }

    logOut(){
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }
}
