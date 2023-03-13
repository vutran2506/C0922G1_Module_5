import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  rfStudent: FormGroup;
@Output() onCreate = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
    this.rfStudent = new FormGroup({
      name: new FormControl(),
      score: new FormControl()
    })


  }

  addStudent() {

    this.onCreate.emit(this.rfStudent.value);
  }
}
