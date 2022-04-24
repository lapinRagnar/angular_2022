import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentData: any = []

  constructor(private student: StudentsService ) { }

  ngOnInit(): void {

    this.student.getAllStudent().subscribe((allData) => {

      console.log(allData);
      this.studentData = allData
      
    })
  }

}
