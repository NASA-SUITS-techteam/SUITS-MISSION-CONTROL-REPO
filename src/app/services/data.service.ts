import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError } from '../../../node_modules/rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpResponse } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  title = 'app works!';
  private apiUrl= 'http://localhost:3000/';
  data: any = {};

  constructor(private http: HttpClient) { 
    console.log('Data service connected');  
    
  }


  createData(){
    return this.http.post(this.apiUrl, 'createData running...');
  }

  getData(){
     return this.http.get('http://localhost:3000/api/suit');
  }

  private extractData(res: Response)
  {
    // let body = res.json();
    let body = JSON.parse('{ "myString": "string", "myNumber": 4 }');
    return body;
  }

  private handleErrorObservable (error: Response | any)
  {
    return throwError(error.message || error);
  }

}
