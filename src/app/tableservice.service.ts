import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  constructor(private http: HttpClient) { }
  arpanrequest(){
   let baseUrl = "http://dummy.restapiexample.com/api/v1/employees";
   return this.http.get(baseUrl);
}
}
