import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.save(product);
    this.router.navigateByUrl('/product/list')
  }
}
