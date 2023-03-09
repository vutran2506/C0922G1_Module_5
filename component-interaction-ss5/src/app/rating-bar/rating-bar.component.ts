import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from "../irating-unit";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input() value: number;
  ratings: IRatingUnit[] = [
    {
      value: 1,
      active: false
    },
    {
      value: 2,
      active: false
    },
    {
      value: 3,
      active: false
    },
    {
      value: 4,
      active: false
    },
    {
      value: 5,
      active: false
    },
    {
      value: 6,
      active: false
    },
    {
      value: 7,
      active: false
    },
    {
      value: 8,
      active: false
    },
    {
      value: 9,
      active: false
    },
    {
      value: 10,
      active: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  rate(value: number): void {
    this.value = value;
    for (let i = 0; i < this.ratings.length; i++) {
      if (this.ratings[i].value <= value) {
        this.ratings[i].active = true;
      } else {
        this.ratings[i].active = false;
      }
    }
  }
}
