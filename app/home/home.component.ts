/*import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as tnsOAuthModule from 'nativescript-oauth';

import { RouterExtensions } from "nativescript-angular/router";
import { getFrameById, topmost } from 'tns-core-modules/ui/frame/frame';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public onTapLogin() {
        console.log('on est dans onTapLogin ');
        this.routerExtensions.navigate(['/devices'], {
            transition: {
                name: "fade"
            }
        });

        tnsOAuthModule.login()
        .then(( token: string )=>{
            token = tnsOAuthModule.accessToken();
            console.log(token);
            
            this.routerExtensions.navigate(['/devices']);
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.closeDrawer();
        })
        .catch((er)=>{
            console.log("nico erreur");
            console.log(er);
        });
    }
    
    public onTapLogout() {
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }
    */

    /*tnsOAuthModule.login()
        .then(( token: string )=>{
            token = tnsOAuthModule.accessToken();
            console.log(token);
            this.url = "http://10.113.128.158:8080/project_dev/devices/token/";

            this.apiServices.post(this.url, token).subscribe(res => {
                this.response = res;
            },
                error => {
                    console.log("error retrieving devices");
                });

            if(this.response.ID != "0"){
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                    "id": this.response.ID
                    }
                };
                this.routerExtensions.navigate(['/devices'], navigationExtras)                    
            } else {
                console.log("User unauthorized");
            }
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.closeDrawer();
        })
        .catch((er)=>{
            console.log(er);
        });*/
    
//}
import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as tnsOAuthModule from 'nativescript-oauth';
import { RouterExtensions } from "nativescript-angular/router";
import { ApiService } from '~/services/apiServices';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

    url: any;
    response: any;
    msg : any;

    constructor(private routerExtensions: RouterExtensions, private apiServices : ApiService) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public onTapLogin() {
        tnsOAuthModule.login()
        .then(( token: string )=>{
            token = tnsOAuthModule.accessToken();
            this.url = "http://10.113.128.158:8080/project_dev/api/devices/token/";
            this.msg = {"token" : token};
            this.apiServices.post(this.url, this.msg).subscribe(res => {
                console.log("réponse Olive");
                this.response = res.json();
                console.log(this.response);
            },
                error => {
                    console.log("error retrieving devices");
                });
            this.routerExtensions.navigate(['/devices'], {
                transition: {
                    name: "fade"
                }
            });
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.closeDrawer();
        })
        .catch((er)=>{
            console.log("nico erreur");
            console.log(er);
        });
    }
    
    public onTapLogout() {
        tnsOAuthModule.logout()
            .then(() => {
                console.log('logged out');
                this.routerExtensions.navigate(['/home']);
                })
    }
}