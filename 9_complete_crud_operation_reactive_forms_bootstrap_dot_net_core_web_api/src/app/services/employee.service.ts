import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiurl_des = "http://localhost:9000/designation"
  apiurl = "http://localhost:9000/employee"
  
  constructor(private http: HttpClient) { }

  loadDesignation() {
    return this.http.get(this.apiurl_des)
  }

  loadAllEmployee() {
    return this.http.get(this.apiurl)
  }

  employeeByCode(code: any) {
    return this.http.get(this.apiurl + '/' + code)
  }
  removeEmployeeByCode(code: any) {
    return this.http.delete(this.apiurl + '/' + code)
  }

  saveEmployee(inputData: any) {
    console.log("je passe par ici!");
    console.log(inputData);
    console.log(this.http.post(this.apiurl, inputData));
    
    
    return this.http.post(this.apiurl, inputData, this.httpOptions)
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

}
