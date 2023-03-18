import {Component, OnInit} from '@angular/core';
import {CoachService} from "../../service/coach.service";
import {CoachTypeService} from "../../service/coach-type.service";
import {DestinationService} from "../../service/destination.service";
import {DepartureService} from "../../service/departure.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CoachType} from "../../model/coach-type";
import {Departure} from "../../model/departure";
import {Destination} from "../../model/destination";
import {Coach} from "../../model/coach";
import Swal from "sweetalert2";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-coach-edit',
  templateUrl: './coach-edit.component.html',
  styleUrls: ['./coach-edit.component.css']
})
export class CoachEditComponent implements OnInit {
  coachTypes: CoachType[] = [];
  departures: Departure[] = [];
  destinations: Destination[] = [];
  formEdit: FormGroup;
   numberBus: string;

  constructor(private coachService: CoachService,
              private coachTypeService: CoachTypeService,
              private destinationService: DestinationService,
              private departureService: DepartureService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.numberBus = paramMap.get('numberBus');
      this.getCoach(this.numberBus);
    });
  }

  getCoach(numberBus: string) {
    this.coachService.findById(numberBus).subscribe(item => {
      this.coachTypeService.getAllCoachType().subscribe(a => {
        this.coachTypes = a;
        this.departureService.getAllDeparture().subscribe(b => {
          this.departures = b;
          this.destinationService.getAllDestination().subscribe(c => {
            this.destinations = c;
            this.formEdit = new FormGroup({
              id: new FormControl(item.id),
              numberBus: new FormControl(item.numberBus),
              coachType: new FormControl(a.find(x => x.id === item.coachType.id)),
              name: new FormControl(item.name),
              departure: new FormControl(b.find(x => x.id === item.departure.id)),
              destination: new FormControl(c.find(x => x.id === item.destination.id)),
              phone: new FormControl(item.phone),
              email: new FormControl(item.email),
              startTime: new FormControl(item.startTime),
              eadTime: new FormControl(item.eadTime),
            });
          });
        });
      });
    });
  }

  updateCoach(id: string) {
      const song = this.formEdit.value;
      this.coachService.update(id, song).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/song']);
      });
  }
}
