import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  apiUrl = 'http://10.113.128.158:8080/project_dev/api/metrics';
  
  constructor(public http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }

  getMetrics() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
