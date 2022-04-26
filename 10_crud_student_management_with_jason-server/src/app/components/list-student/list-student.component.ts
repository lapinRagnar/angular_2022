
import { StudentsService } from './../../services/students.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit, OnDestroy {

  studentData: any = []

  dtOptions:DataTables.Settings = {}

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private student: StudentsService ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      // lengthMenu: [5, 10, 15, 50] ,
      // autoWidth: true ,
      // processing: true
    }

    this.student.getAllStudent().subscribe((allData) => {

      console.log(allData);
      this.studentData = allData

      this.dtTrigger.next(allData);
      
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  deleteStudent(student_id: any) {
    console.log(student_id);
    this.student.deleteStudent(student_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit() // pour raffraichir la page 
    })
  }

}
