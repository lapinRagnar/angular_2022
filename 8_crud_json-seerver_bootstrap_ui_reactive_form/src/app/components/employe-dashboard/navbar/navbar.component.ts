import { EmployeInterface } from './../../../shared/types/employe.interface';
import { EmpolyeService } from './../../../shared/service/employe.service';
import { EmployeModel } from './../../../shared/models/employe.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  employe !: EmployeInterface

  formValue !: FormGroup

  employeModelObj: EmployeModel = new EmployeModel()

  constructor(private formbuilder: FormBuilder, private employeService : EmpolyeService ) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })


  }


  postEmployeDetails() {
    this.employeModelObj.firstName = this.formValue.value.firstName
    this.employeModelObj.lastName = this.formValue.value.lastName
    this.employeModelObj.email = this.formValue.value.email
    this.employeModelObj.mobile = this.formValue.value.mobile
    this.employeModelObj.salary = this.formValue.value.salary

    this.employeService.postEmploye(this.employeModelObj).subscribe(
      res => {
        console.log(res)
        alert("employe bien enregistrĂ©! ")
        let ref = document.getElementById('fermerApresAjoutEmploye')
        ref?.click()
        this.formValue.reset()
        
      },
      err => {
        console.log(err);
        
        alert('il y a un probleme !')
      }
    )
  }

  updateEmployeDetails(employe: EmployeInterface) {

    this.employeModelObj.id = employe.id
    this.employeModelObj.firstName = this.formValue.value.firstName
    this.employeModelObj.lastName = this.formValue.value.lastName
    this.employeModelObj.email = this.formValue.value.email
    this.employeModelObj.mobile = this.formValue.value.mobile
    this.employeModelObj.salary = this.formValue.value.salary
    
    this.employeService.updateEmploye(this.employeModelObj, this.employeModelObj.id).subscribe(
      res => {
        alert('update reussi! ')
        let ref = document.getElementById('fermerApresAjoutEmploye')
        ref?.click()
        this.formValue.reset()
      }
    )
  }

}
