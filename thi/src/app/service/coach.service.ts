import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coach} from "../model/coach";

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCoach(): Observable<Coach[]> {
    return this.httpClient.get<Coach[]>('http://localhost:8080/api/coach');
  }

  save(Coach): Observable<Coach> {
    return this.httpClient.post<Coach>('http://localhost:8080/api/coach', Coach);
  }

  findById(id: string): Observable<Coach> {
    return this.httpClient.get<Coach>(`http://localhost:8080/api/coach/${id}`);
  }

  update(id: string, Coach: Coach): Observable<Coach> {
    return this.httpClient.put<Coach>(`http://localhost:8080/api/coach/${id}`, Coach);
  }

  delete(id: number): Observable<Coach> {
    return this.httpClient.delete<Coach>(`http://localhost:8080/api/coach/${id}`);
  }

  changePage(page: number): Observable<any[]> {
return this.httpClient.get<any[]>('http://localhost:8080/api/coach?page='+page)
  }
}
