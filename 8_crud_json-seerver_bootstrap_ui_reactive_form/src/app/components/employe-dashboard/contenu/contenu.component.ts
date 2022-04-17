import { EmployeInterface } from './../../../shared/types/employe.interface';
import { Component, OnInit } from '@angular/core';

import { EmpolyeService } from './../../../shared/service/employe.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {

  employeData !: any

  constructor(private employeService : EmpolyeService) { }

  ngOnInit(): void {
    this.getAllEmploye()
  }

  getAllEmploye() {
    this.employeService.getEmploye().subscribe(
      res => {
        this.employeData = res
      }
      
    )
  }

}
