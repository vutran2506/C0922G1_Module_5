import { Injectable } from '@angular/core';
import {Facility} from '../../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor(private httpClient: HttpClient) { }

  getAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:3000/facilitys');
  }
  getAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>('http://localhost:3000/facilityTypes');
  }
  getAllRentType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>('http://localhost:3000/rentTypes');
  }
  createFacility(facility: any): Observable<Facility> {
    return this.httpClient.post<Facility>('http://localhost:3000/facilitys', facility);
  }
  updateFacility(facility: any): Observable<Facility> {
    return this.httpClient.put<Facility>('http://localhost:3000/facilitys/' + facility.id, facility );
  }
}
