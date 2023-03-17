import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Song} from '../model/song';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) {
  }

  getAllSong(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(' http://localhost:3000/song');
  }

  save(song): Observable<Song> {
    return this.httpClient.post<Song>('http://localhost:3000/song', song);
  }

  findById(id: number): Observable<Song> {
    return this.httpClient.get<Song>(`http://localhost:3000/song/${id}`);
  }

  update(id: number, song: Song): Observable<Song> {
    return this.httpClient.put<Song>(`http://localhost:3000/song/${id}`, song);
  }

  delete(id: number): Observable<Song> {
    return this.httpClient.delete<Song>(`http://localhost:3000/song/${id}`);
  }

  findByName(nameSearch: string): Observable<Song[]> {
    return  this.httpClient.get<Song[]>(`http://localhost:3000/song/?name_like=` + nameSearch);
  }

  findByNameAndByCategoryId(nameSearch: string, category: number): Observable<Song[]> {
    return  this.httpClient.get<Song[]>(`http://localhost:3000/song/?name_like=` + nameSearch + `&category.id=` + category);
  }
}
