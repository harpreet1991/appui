import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import {environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
apiUrl = "../../assets/mock/api.json";
//apiUrl = environment.apiUrl;

appSharingData : any;
public notify = new Subject;

  constructor(public http:HttpClient ) { }
  getdata(){
   return this.http.get(this.apiUrl);
  }

}
