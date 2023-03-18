import { Component, OnInit } from '@angular/core';
import {CoachService} from "../../service/coach.service";
import {CoachTypeService} from "../../service/coach-type.service";
import {DestinationService} from "../../service/destination.service";
import {DepartureService} from "../../service/departure.service";
import {Coach} from "../../model/coach";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {
coachList: Coach[]= [];
totalPage =0;
page = 0;
coach: any
  temp: Coach = {};

  constructor(private coachService: CoachService,
              private coachTypeService:CoachTypeService,
              private destinationService: DestinationService,
              private departureService: DepartureService) { }

  ngOnInit(): void {
    this.getAllCoach()
  }
 getAllCoach(){
    this.coachService.getAllCoach().subscribe( items => {
      this.coachList = items;



    })
 }

  delete(id: number) {
    if (id != null) {
      this.coachService.delete(id).subscribe(next => {
        this.getAllCoach();
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      });
    }
  }

  changePage(number: number) {
    this.coachService.changePage(number).subscribe(next => {
      this.coachList = next;
    });
  }
}
