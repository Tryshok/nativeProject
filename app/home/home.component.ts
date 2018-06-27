import { Component, OnInit } from "@angular/core";
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

        tnsOAuthModule.login()
        .then(( token: string )=>{
            token = tnsOAuthModule.accessToken();
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
            .then(() => console.log('logged out'),
            topmost().navigate({
                moduleName: "./devices/devices"
              }))
            .catch((er) => {
                console.error('error logging out');
                console.dir(er);
            });
    }

    public authcallback() {
        console.log('yay callback');
    }

    
    
}

