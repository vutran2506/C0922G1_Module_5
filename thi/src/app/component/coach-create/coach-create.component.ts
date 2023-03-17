import {Component, OnInit} from '@angular/core';
import {CoachType} from "../../model/coach-type";
import {Departure} from "../../model/departure";
import {Destination} from "../../model/destination";
import {FormControl, FormGroup} from "@angular/forms";
import {CoachService} from "../../service/coach.service";
import {CoachTypeService} from "../../service/coach-type.service";
import {DestinationService} from "../../service/destination.service";
import {DepartureService} from "../../service/departure.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css']
})
export class CoachCreateComponent implements OnInit {
  coachTypes: CoachType[] = [];
  departures: Departure[] = [];
  destinations: Destination[] = [];
  formCreate: FormGroup;

  constructor(private coachService: CoachService,
              private coachTypeService: CoachTypeService,
              private destinationService: DestinationService,
              private departureService: DepartureService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      numberBus: new FormControl(),
      coachType: new FormControl(),
      name: new FormControl(),
      departure: new FormControl(),
      destination: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      startTime: new FormControl(),
      eadTime: new FormControl(),
    });
    this.getAllCoachType();
    this.getAllDeparture();
    this.getAllDestination();
  }

  getAllCoachType() {
    this.coachTypeService.getAllCoachType().subscribe(a => {
      this.coachTypes = a;
    });
  }

  getAllDeparture() {
    this.departureService.getAllDeparture().subscribe(b => {
      this.departures = b;
    });
  }

  getAllDestination() {
    this.destinationService.getAllDestination().subscribe(c => {
      this.destinations = c;
    });
  }

  createCoach() {
    const coach = this.formCreate.value;
    this.coachService.save(coach).subscribe(() => {
      this.formCreate.reset();
      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigate(['/coach']);
    });
  }
}
