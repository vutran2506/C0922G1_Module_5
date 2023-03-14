import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new  FormControl()
  });
  categoryList: Category[];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory()
  }

  submit() {
    const category = this.productForm.value;
    this.productService.saveProduct(category).subscribe(() => {
      this.productForm.reset();
      this.router.navigate(['/product/list']);
      alert('Thêm thành công')
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categories => {
      this.categoryList = categories;
    })
  }
}
