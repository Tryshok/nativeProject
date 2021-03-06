import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/apiServices'
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationExtras, ActivatedRoute } from "@angular/router";
import * as tnsOAuthModule from 'nativescript-oauth';

@Component({
    selector: "Devices",
    moduleId: module.id,
    templateUrl: "./devices.component.html"
})
export class DevicesComponent implements OnInit {

    url: string ;
    devices: any;
    isAvailable : any ;
    idDevice : any ;
    userName : any;

    constructor(private apiServices : ApiService, private routerExtensions : RouterExtensions, private route : ActivatedRoute) { 
        this.isAvailable = false;
        this.route.queryParams.subscribe((params) => {
            this.idDevice = params["id"];
            this.userName = params["userName"];
        });
    }

    ngOnInit(): void {
        this.url =  "http://10.113.128.158:8080/project_dev/api/devices/users/" + this.idDevice;
        this.apiServices.get(this.url).subscribe(res => {
            this.devices = res;
        },
            error => {
                console.log("error retrieving devices");
            });
            this.isAvailable = true;
    }

    onItemTap(args) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
            "id": this.devices[args.index].ID,
            "userName" : this.userName
            }
        };
        this.routerExtensions.navigate(['/oneDevice'], navigationExtras)
    }

    logOut(){
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }
}
    



    

