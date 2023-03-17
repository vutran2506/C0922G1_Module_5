import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {Book} from '../../model/book';
import {Category} from '../../model/category';

@Component({
  selector: 'app-bool-list',
  templateUrl: './bool-list.component.html',
  styleUrls: ['./bool-list.component.css']
})
export class BoolListComponent implements OnInit {
  books: Book[] = [];
  categories: Category[] = [];
  page = 1;
  temp: Book = {};
  nameSearch = '';
  cateSearch: 0;

  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllBook();
    this.getAllCategory();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe(items => {
      this.books = items;
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(items => {
      this.categories = items;
    });
  }

  delete(id: number) {
    if (id != null) {
     return  this.bookService.deleteBook(this.temp.id).subscribe(next => {
        this.getAllBook();
        alert('Xoas tnahf coong');
      });
    }
  }

  search() {
    console.log(this.nameSearch);
    console.log(this.cateSearch);
    if (this.cateSearch >=  1 ) {
      this.bookService.findByNameAndCategory(this.nameSearch, this.cateSearch).subscribe( items =>{
        this.books = items;
        this.page = 1;
      });
    } else {
      this.bookService.findByName(this.nameSearch).subscribe(items => {
        this.books = items;
        this.page = 1;
      });
    }
  }
}
