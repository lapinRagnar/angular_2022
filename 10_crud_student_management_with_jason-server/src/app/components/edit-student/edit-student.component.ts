import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService: StudentsService, private router: ActivatedRoute) { }


  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  message: boolean = false

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.studentService.getStudentById(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log("on est dans le ngOnInit", result)
      // pour populer le formulaire
      this.editStudent = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email'])
      })
    })
  }

  updateData() {
    console.log(this.editStudent.value);
    this.studentService.updateStudentData(this.router.snapshot.params['id'], this.editStudent.value).subscribe((result) => {
      console.log(" je suis en train de mettre à jour! ",result)
      this.message = true
    })
  }

  removeMessage() {
    this.message = false
  }

}
