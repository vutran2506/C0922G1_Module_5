import { Component, OnInit } from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isShow = true;
  studentDetail :Student = undefined;
  students :Student[] = [
    {
      id:1,
      name :'Trần Ngọc Vũ',
      score: 7,
      vote:4
    }  ,
    {
      id:2,
      name :'Trần Ngọc Hải',
      score: 8,
      vote:9
    }  ,
    {
      id:3,
      name :'Trần Ngọc Gia Bảo',
      score: 9,
      vote:6
    }  ,
    {
      id:4,
      name :'Trần Ngọc Hùng',
      score: 10,
      vote:46
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeDetail(st: Student) {
    this.studentDetail =st;
  }


  saveStudent($event: Student) {
    this.students.push({
      ...$event,vote:0
    })
  }
}
