import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { EmployeInterface } from './../types/employe.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeService {

  private url = "http://localhost:9000/employe"

  constructor(private http: HttpClient) { }

  postEmploye(data: EmployeInterface): Observable<EmployeInterface> {
    return this.http.post<EmployeInterface>(this.url, data).pipe(
      map((res: EmployeInterface) => {return res} )
    )
  }

  // getEmploye(data: EmployeInterface): Observable<EmployeInterface> {
  //   return this.http.get<EmployeInterface>(this.url).pipe(
  //     map((res: EmployeInterface) => {return res})
  //   )
  // }
  getEmploye(): Observable<EmployeInterface> {
    return this.http.get<EmployeInterface>(this.url).pipe(
      map((res: EmployeInterface) => {return res})
    )
  }

  updateEmploye(data: EmployeInterface, id: number ): Observable<EmployeInterface> {
    return this.http.put<EmployeInterface>(this.url+id, data).pipe(
      map((res: EmployeInterface) => {return res})
    )
  }

  deleteEmploye(id: number): Observable<EmployeInterface> {
    return this.http.delete<EmployeInterface>(this.url + id).pipe(
      map((res: EmployeInterface) => {return res})
    )
  }

}
