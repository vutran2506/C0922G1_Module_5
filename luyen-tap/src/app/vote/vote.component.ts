import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() vote =5;

  constructor() { }

  ngOnInit(): void {
  }

  changeVote() {
    this.vote++;
  }
}
