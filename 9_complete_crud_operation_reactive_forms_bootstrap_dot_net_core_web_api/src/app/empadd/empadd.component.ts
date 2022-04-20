import { DesignationInterface } from './../interfaces/designation.interface';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {

  designationData : any 

  constructor(private employeeService: EmployeeService) {
    this.loadDesignation()
  }

  ngOnInit(): void {
  }

  loadDesignation() {
    this.employeeService.loadDesignation().subscribe(result => {
      this.designationData = result
      console.log(this.designationData);
      
    })
  }

}
