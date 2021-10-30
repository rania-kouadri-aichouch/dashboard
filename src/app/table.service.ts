import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import {Observable , of , throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    const url = "https://randomuser.me/api/?results=100"
    return this.http.get<any>(url)
  }

  

}
