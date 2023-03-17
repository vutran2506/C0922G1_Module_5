import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  books: Book[] = [];
  categories: Category[] = [];
  formBook: FormGroup;

  constructor(private categoryService: CategoryService,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formBook = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      startDay: new FormControl(),
      category: new FormControl()
    });
    this.getAllCategory();
  }

  getAllCategory() {
   return  this.categoryService.getAllCategory().subscribe(items => {
      this.categories = items;
    });
  }

  submit() {
    const book = this.formBook.value;
    return this.bookService.createBook(book).subscribe(() => {
      this.formBook.reset();
      alert('Têm thành công');
      this.router.navigate(['/book']);
    });
  }
}
