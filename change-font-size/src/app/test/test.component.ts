import { Component, OnInit } from '@angular/core';
import {Pet} from "./pet";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  pet: Pet = {
    name :'Bùi Đức Vũ',
    image :'https://dogily.vn/wp-content/uploads/2019/02/hinh-anh-cho-Pug-dogily-petshop-1.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
