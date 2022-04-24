import { tap } from 'rxjs';
import { DesignationInterface } from './../interfaces/designation.interface';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {

  designationData : any
  
  saveResp : any

  messageClass = ''
  message = ''

  employeeForm = new FormGroup({
    code: new FormControl({value: '', disabled: true}),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
  })

  // employeeForm = new FormGroup({
  //   code: new FormControl(''),
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   designation: new FormControl(''),
  // })

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

  saveEmployee() {

    if (this.employeeForm.valid) {

      console.log(" employeeForm est valide", this.employeeForm.value);

      this.employeeService.saveEmployee(this.employeeForm.value).subscribe((result) => {
        
        console.log("le resut est", result);
        
        this.saveResp = result
        console.log("jes suis ici");
        
        console.log(this.saveResp);


        if (this.saveResp === "pass") {
          this.message = "l'enregistrement est ok!"
          this.messageClass = 'sucess'
        } else
        {
          this.message = "l'enregistrement a echoué!"
          this.messageClass = 'error'
        }
      })
    } else 
    {
      this.message = "donner des valeurs valides"
      this.messageClass = 'error'
    }
  }




  get name() {
    return this.employeeForm.get('name')
  }

  get phone() {
    return this.employeeForm.get('phone')
  }

  get email() {
    return this.employeeForm.get('email')
  }

  get designation() {
    return this.employeeForm.get('designation')
  }

  

}
