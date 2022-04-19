import { EmployeInterface } from './../../../shared/types/employe.interface';
import { Component, OnInit } from '@angular/core';

import { EmpolyeService } from './../../../shared/service/employe.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {

  formValue !: FormGroup
  
  employeData !: any

  constructor(private formbuilder: FormBuilder, private employeService : EmpolyeService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    this.getAllEmploye()
  }

  getAllEmploye() {
    this.employeService.getEmploye().subscribe(
      res => {
        this.employeData = res
      }
      
    )
  }

  deleteEmploye(employe: EmployeInterface) {
    this.employeService.deleteEmploye(employe.id).subscribe(
      res => {
        alert('employe supprimé! ')
        this.getAllEmploye()
      }
    )
  }

  onEditEmploye(employe: EmployeInterface) {
    this.formValue.controls['firstName'].setValue(employe.firstName)
    this.formValue.controls['lastName'].setValue(employe.lastName)
    this.formValue.controls['email'].setValue(employe.email)
    this.formValue.controls['mobile'].setValue(employe.mobile)
    this.formValue.controls['salary'].setValue(employe.salary)
  }

}
