import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
result: any;
  constructor() { }

  ngOnInit(): void {
  }

  addition(value: string, value2: string) {
    this.result = parseInt(value,10)+parseInt(value2,10)
  }

  subtraction(value: string, value2: string) {
    this.result = parseInt(value,10)+parseInt(value2,10)
  }

  multiplication(value: string, value2: string) {
    this.result = parseInt(value,10)*parseInt(value2,10)
  }

  division(value: string, value2: string) {
    if (parseInt(value2) == 0){
      this.result= 'Không thể chia cho 0'
    }else {
      this.result = parseInt(value,10)/parseInt(value2,10)
    }

  }
}
