import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = 'http://localhost:3000/students'
  constructor(private http: HttpClient) { }

  getAllStudent() {
    return this.http.get(this.url)
  }
}
