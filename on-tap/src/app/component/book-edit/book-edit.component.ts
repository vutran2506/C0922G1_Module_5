import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model/book';
import {Category} from '../../model/category';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  formEdit: FormGroup;
  categories: Category[] = [];
 id: number;

  constructor(private categoryService: CategoryService,
              private  bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
    this.getAllCategory();
  }

  getAllCategory() {
   return  this.categoryService.getAllCategory().subscribe(items => {
      this.categories = items;
    });
  }

  getBook(id: number) {
   return  this.bookService.findById(id).subscribe(item => {
      this.categoryService.getAllCategory().subscribe(items => {
        this.categories = items;
        this.formEdit = new FormGroup({
          id: new FormControl(item.id),
          name: new FormControl(item.name),
          author: new FormControl(item.author),
          startDay: new FormControl(item.startDay),
          category: new FormControl(items.find(x => x.id === item.category.id))
        });
      });
    });
  }

  updateProduct(id: number) {
    const book = this.formEdit.value;
    return this.bookService.editBook(id, book).subscribe(() => {
      alert('Sủa tnahf công');
      this.router.navigate(['/book']);
    });
  }
}
