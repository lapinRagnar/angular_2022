import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "smith"
  btnColor = "warn"

  constructor() { }

  ngOnInit(): void {
  }

  changeBtnColor () {
    if (this.btnColor === "primary"){
      this.btnColor = 'accent'
    } else
    {
      this.btnColor = "primary"
    }
  }

  resetNameToSmith(){
    this.name = "smith"
  }

  updateName(value: string){
    this.name = value
  }

}
