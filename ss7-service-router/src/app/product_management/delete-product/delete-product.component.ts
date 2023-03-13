import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
productDelete: Product;
  formProduct: FormGroup

  constructor( private productService: ProductService,
               private router: Router,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(paramMap =>{
    const id = parseInt(paramMap.get('id'),10);
    this.productDelete = this.productService.findById(id);
  })
    this.formProduct = new FormGroup({
      id: new FormControl(this.productDelete.id),
      name: new FormControl(this.productDelete.name),
      price: new FormControl(this.productDelete.price),
      description: new FormControl(this.productDelete.description)
    })
  }

  deleteProduct() {
    const productDelete = this.formProduct.value
    this.productService.delete(productDelete);
    this.router.navigateByUrl('/product/list')
  }
}
