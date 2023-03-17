import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoachType} from "../model/coach-type";
import {Departure} from "../model/departure";

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  constructor(private httpClient: HttpClient) { }
  getAllDeparture(): Observable<Departure[]> {
    return this.httpClient.get<Departure[]>(' http://localhost:3000/Coach');
  }
}
