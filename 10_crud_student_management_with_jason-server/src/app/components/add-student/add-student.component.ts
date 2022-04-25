import { StudentsService } from './../../services/students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  message: boolean = false

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {

  }

  saveData() {
    console.log(this.addStudent.value);
    this.studentService.saveStudentData(this.addStudent.value).subscribe((result) => {
      console.log(result)
      this.addStudent.reset()
      this.message = true
    })
  }

  removeMessage() {
    this.message = false
  }

}
