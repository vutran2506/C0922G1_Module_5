import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productUpdate: Product;

  productForm: FormGroup

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'),10);
      this.productUpdate = this.productService.findById(id)
    })
     this.productForm= new FormGroup({
      id: new FormControl(this.productUpdate.id),
      name: new FormControl(this.productUpdate.name),
      price: new FormControl( this.productUpdate.price),
      description: new FormControl(this.productUpdate.description)
    })
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.edit(product);
    this.router.navigateByUrl('/product/list')
  }

}
