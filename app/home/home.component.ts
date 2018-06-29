import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as tnsOAuthModule from 'nativescript-oauth';
import { RouterExtensions } from "nativescript-angular/router";
import { ApiService } from '~/services/apiServices';
import { NavigationExtras } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

    url: any;
    response: any;
    response2 : any;
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

            this.apiServices.post(this.url, "\""+token+"\"").subscribe(res => {
                this.response = res.json();
                if(this.response.ID != 0){
                    let navigationExtras: NavigationExtras = {
                        queryParams: {
                        "id": this.response.ID,
                        "userName" : this.response.Name
                        }
                    };
                    this.routerExtensions.navigate(['/devices'], navigationExtras)                    
                } else {
                    console.log("User unauthorized");
                }
            },
                error => {
                    console.log(error);
                });
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.closeDrawer();
        })
        .catch((er)=>{
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