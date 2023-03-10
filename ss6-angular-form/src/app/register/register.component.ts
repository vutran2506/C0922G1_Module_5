import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rfRegister :FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rfRegister =new FormGroup({
      email:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      password :new FormControl("",[Validators.minLength(6),Validators.required]),
      confirmPassword: new FormControl("",[Validators.required]),
      country :new FormControl("",[Validators.required] ),
      age :new FormControl("",[Validators.required,Validators.min(18)]),
      gender :new FormControl("",[Validators.required]),
      phone :new FormControl("",[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')]),
    })
  }

  register() {

  }
}
