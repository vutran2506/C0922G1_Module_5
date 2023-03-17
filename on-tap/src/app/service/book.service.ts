import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:3000/book`);
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`http://localhost:3000/book`, book);
  }

  findById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:3000/book/${id}`);
  }

  editBook(id, book): Observable<Book> {
    return this.httpClient.put<Book>(`http://localhost:3000/book/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`http://localhost:3000/book/${id}`);
  }

  findByName(nameSearch: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:3000/book/?name_like=` + nameSearch);
  }
  findByNameAndCategory(nameSearch: string, category: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:3000/book/?name_like=` + nameSearch + `&category.id=` + category);
  }
}
