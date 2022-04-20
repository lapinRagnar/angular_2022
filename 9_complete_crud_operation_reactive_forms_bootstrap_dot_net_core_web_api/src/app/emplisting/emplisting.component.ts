import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplisting',
  templateUrl: './emplisting.component.html',
  styleUrls: ['./emplisting.component.css']
})
export class EmplistingComponent implements OnInit {

  employeeData: any

  constructor(private employeeService: EmployeeService) { 
    this.loadAll()
  }

  ngOnInit(): void {
  }

  loadAll() {
    this.employeeService.loadAllEmployee().subscribe(result => {
      this.employeeData = result
    })
  }

  delete(code: any) {
    
  }

}
