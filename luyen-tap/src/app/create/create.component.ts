import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
@Output() onCreate = new EventEmitter<Student>();

createStudent:Student;

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(value: string, value2: number) {
    this.createStudent ={
      name:value,
      score:value2
    };
    this.onCreate.emit(this.createStudent);
  }
}
