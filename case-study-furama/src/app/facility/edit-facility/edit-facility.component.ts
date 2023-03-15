import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../service/facility/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
  }

}
