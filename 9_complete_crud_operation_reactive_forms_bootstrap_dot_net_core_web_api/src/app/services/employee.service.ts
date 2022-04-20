import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiurl_des = "http://localhost:9000/designation"
  
  constructor(private http: HttpClient) { }

  loadDesignation() {
    return this.http.get(this.apiurl_des)
  }
}
