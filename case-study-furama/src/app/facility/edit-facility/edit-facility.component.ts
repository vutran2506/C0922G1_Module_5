import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  formEditGroup: FormGroup =  new FormGroup({});
  private id: number;

  constructor(private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
    this.getAllFacilityType();
    this.getAllRentType();
  }

  getFacility(id: number) {
    return this.facilityService.finByIdFacility(id).subscribe(item => {
      console.log(item);
      this.formEditGroup = new FormGroup({
        id: new FormControl(item.id),
        name: new FormControl(item.name, [Validators.required]),
        image: new FormControl(item.image, [Validators.required]),
        area: new FormControl(item.area, [Validators.required]),
        cost: new FormControl(item.cost, [Validators.required]),
        maxPeople: new FormControl(item.maxPeople, [Validators.required]),
        standard: new FormControl(item.standard),
        description: new FormControl(item.poolArea),
        poolArea: new FormControl(item.poolArea),
        floor: new FormControl(item.floor),
        facilityFree: new FormControl(item.facilityFree),
        rentType: new FormControl(this.rentTypeList.find(a => a.id === item.rentType.id), [Validators.required]),
        facilityType: new FormControl(this.facilityTypeList.find( a => a.id === item.facilityType.id), [Validators.required])
      });
    });
  }
  getAllFacilityType() {
    this.facilityService.getAllFacilityType().subscribe(item => {
      this.facilityTypeList = item;
    });
  }
  getAllRentType() {
    this.facilityService.getAllRentType().subscribe(item => {
      console.log(this.rentTypeList);
      this.rentTypeList = item;
    });
  }

  updateFacility() {
    this.facilityService.updateFacility(this.formEditGroup.value).subscribe(
      next => {
        this.formEditGroup.reset();
        this.ngOnInit();
      }
    );
  }

}
