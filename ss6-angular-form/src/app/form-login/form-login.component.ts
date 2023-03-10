import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  rfLogin : FormGroup;



  constructor() { }

  ngOnInit(): void {
this.rfLogin = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
  confirmPassword: new FormControl("",[Validators.required]),
})
  }

}
