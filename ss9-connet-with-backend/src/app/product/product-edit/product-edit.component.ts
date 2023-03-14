import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {

  }

  categoryList: Category[];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
    this.getAllCategory()

  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe((item) => {
      this.productForm = new FormGroup({
        id: new FormControl(item.id),
        name: new FormControl(item.name),
        price: new FormControl(item.price),
        description: new FormControl(item.description),
        category: new FormControl(this.categoryList.find(a => a.id === item.category.id)),
      });
    });
  }

  updateProduct(id: number) {
    const category = this.productForm.value;
    this.productService.updateProduct(id, category).subscribe(() => {
      this.router.navigate(['/product/list']);
      alert('Cập nhập thành công')
    })
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(item => {
      this.categoryList = item;
    })
  }
}
