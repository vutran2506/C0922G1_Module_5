import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() student :Student;

  constructor() { }

  ngOnInit(): void {
  }

}
