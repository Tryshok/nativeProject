import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class ApiService {

    constructor(
        private http: Http
    ) { }

    get(url: string, headers: Headers) {
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).pipe(map(res => res));
    }

   /* get(url: string) {
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(url).pipe(map(res => res));
    }*/

    /*post(url: string, headers: Headers, body: object) {
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options);
    }*/
}