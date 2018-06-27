// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import * as tnsOAuthModule from "nativescript-oauth";

var myInitOptions : tnsOAuthModule.ITnsOAuthCredentials = {
    authority: 'https://partners-login.eliotbylegrand.com',
    authorizeEndpoint: '/authorize',
    tokenEndpoint: '/token',
    clientId: '358ca400-fdf6-4357-8cca-27caa6699197',
    clientSecret: '*d,|`89Jnx/Ea5O8y$T724W4',
    redirectUri: 'urn:ietf:wg:oauth:2.0:oob',
    responseType: 'code',
    scope: ''
};

tnsOAuthModule.initCustom({
    credentials: myInitOptions,
    cookieDomains: [ ''],
});

platformNativeScriptDynamic().bootstrapModule(AppModule);


