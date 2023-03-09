import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() value: number;
  @Input()status: string;
  second: number = 10;
  private interval:number = 0;
  constructor() { }

  ngOnInit(): void {

  }
  run() {
    this.interval = window.setInterval( () => {
      this.value -= 1;
      if (this.value === 0) {
        this.clearTime();
      }
    },1000)

  }

  start() {
    this.run();
    if (this.value === 0) {
      this.clearTime();
      this.value = this.second;
      this.status=`Happy new year`
    }
  }

  stop() {
    this.clearTime();
  }

  private clearTime() {
    clearInterval(this.interval);
  }

  reset() {
    this.clearTime();
    this.value = this.second;
    this.status =`Click start button to start the Countdown`;
  }
}
