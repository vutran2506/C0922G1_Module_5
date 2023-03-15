import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }
  getAllSong(): Observable<Song[]> {
   return  this.httpClient.get<Song[]>(' http://localhost:3000/category');
  }
}
