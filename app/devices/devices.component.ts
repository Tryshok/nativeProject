import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/apiServices'

import { map } from "rxjs/operators";
import { RestProvider } from '../rest/rest'

import { Http, Headers, RequestOptions } from "@angular/http";
import { RouterExtensions } from "nativescript-angular/router";



@Component({
    selector: "Devices",
    moduleId: module.id,
    templateUrl: "./devices.component.html"
})
export class DevicesComponent implements OnInit {

    url: string = "http://10.113.128.158:8080/project_dev/api/metrics";
    devices: any;
    isAvailable : any

    constructor(private apiServices : ApiService,  private http: Http, private provider: RestProvider, private routerExtensions : RouterExtensions) { 
        this.isAvailable = false;
    }

    ngOnInit(): void {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        
        this.http.get("http://10.113.128.158:8080/project_dev/api/devices/users/" + "1", options).pipe(map(res => res.json()))
        //this.http.get("https://jsonplaceholder.typicode.com/users", options).pipe(map(res => res))
        .subscribe(res => {
            
            this.devices = res;
            console.log(this.devices);
           // console.log("RES:" + JSON.stringify(res));
            
        },
            error => {
                console.log("error retrieving devices");
            });
            this.isAvailable = true;

        /*this.http.get("https://jsonplaceholder.typicode.com/users", options).pipe(map(res => res))
        .subscribe(res => {
            console.log("RES:" + JSON.stringify(res));
        // this.devices = res;
        // console.log(this.devices);
        },
            error => {
                console.log("error retrieving devices");
            });*/
    }

    metricsOfDevice() {
        console.log("Device en particulier");
        this.routerExtensions.navigate(['/home']);
    }

    /*showDevices(){
        console.log("showDevices");
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        this.http.get(this.url, options).pipe(map(res => res))
        .subscribe(res => {
            console.log("RES:" + JSON.stringify(res));
            this.devices = res;
            console.log(this.devices);
        },
            error => {
                console.log("error retrieving devices");
            });
    }*/
       /*
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        this.http.get("https://jsonplaceholder.typicode.com/users", options).pipe(map(res => res))
        .subscribe(res => {
            console.log("RES:" + JSON.stringify(res));
        },
            error => {
                console.log("error retrieving devices");
            });*/
    

    /*showDevices2(){
        console.log("showDevices2");
        this.provider.getMetrics().then(data => {
        this.users = data;
        console.log(this.users);
    });
    }*/

    
    

    

    /*this.apiServices.get(this.url, this.options).subscribe(res => {
            console.log("RES:" + JSON.stringify(res));
            this.devices = res;
        },
            error => {
                console.log("error retrieving devices");
            });*/


    



    

    

}

    /*this._devicesService.getAllDevices()
            .subscribe(res => {
                console.log("RES:" + JSON.stringify(res));
                this.devices = res;
            },
                error => {
                    console.log("error retrieving devices");
                });

    */

    
    /*

    showDevice(url) {
        //let options = new RequestOptions({ headers: headers });
        return this.http.get(url).pipe(map(res => res.json()));
    }


    getAll(): Observable<Model[]> {
        if (this.models.length === 0) {
            this.http.get(ApiService.URL).map(res => res.json())
                .publishReplay(1)
                .refCount().subscribe(value => {
                // update the local value
                this.models = value;
                // publish update to observers
                this.cache.next(this.models);
            }, this._handleError);
        }
        return this.cache;
    }


    get(url: string, headers: Headers) {
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).pipe(map(res => res.json()));
    }

    showDevice(){
        console.log("mafonction");
        this.http.get(url,options).pipe(map(res => res.json()));

        this.http.get(this.url)
        .toPromise()
        .then((result) => {
            console.log("showDevice")
        }, (err) => {
        console.log(err)})
*/

        //this.http.get("http://10.113.128.158:8080/project_dev/api/metrics").pipe(map(res => res.json()
        //.catch(this.handleError)))
//}

    /*data : any;
    res : any;
    url: string = "http://10.113.128.158:8080/project_dev/api/metrics";

    constructor(public restProvider: RestProvider, public httpModule: HttpModule, private http: Http, private httpClient: HttpClient) {
    }
    
    ngOnInit(): void {
        
        this.http.get('http://10.113.128.158:8080/project_dev/api/metrics').pipe(map(data => {
      console.log(data);
    });
    }

    showDevice(){
        console.log("mafonction");

        this.http.get(this.url)
        .toPromise()
        .then((result) => {
            console.log("showDevice")
        }, (err) => {
        console.log(err)})


        //this.http.get("http://10.113.128.158:8080/project_dev/api/metrics").pipe(map(res => res.json()
        //.catch(this.handleError)))
    };*/

    /*

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
      }

    showDevice(){
    console.log("showDevice")
        this.restProvider.getMetrics().then((result) => {
            console.log("showDevice")
        }, (err) => {
        console.log(err);
        });
    }
*/

/*
    mafonction() {
        console.log("mafonction");
        this.http.get(this.url, { responseType: 'text' }).subscribe(res => {
          this.data = res;
          console.log("mafonction");
        });
      }
*/
/*
      public getAllTodos(): Observable<Todo[]> {
        return this.http
          .get(this.url).map((json: Object) => {
            const todos = response.json();
            return todos.map((todo) => new Todo(todo));
          })
          .catch(this.handleError);
      }

      

      map((json: Object) => <Article>({
        author: json['author'],
        title: json['title'],
        body: json['body'],
*/
    
    

    
    

    /*
    
    showDevice() {
        console.log("Show devices");
        this.restProvider.getMetrics().then((result) => {
          console.log(result);
          this.data = result;
          
        }, (err) => {
          console.log(err);
        });
      }

    
    fetchModule = require("fetch");

    getRequest() {
        console.log("getRequest");
        this.fetchModule.fetch("http://10.113.128.158:8080/project_dev/api/metrics", {
            method: "GET"
        })
        .then(function(response) {
            alert({title: "GET Response", message: JSON.stringify(response), okButtonText: "Close"});
        }, function(error) {
            console.log(JSON.stringify(error));
        })
    }*/


    



    

