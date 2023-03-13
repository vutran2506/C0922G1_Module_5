import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New'
    }, {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%'
    }, {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%'
    }, {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }
  ]

  constructor() { }
  getAllProduct(){
    return this.products;
  }
  save(product){
    this.products.push(product);
  }
  findById(id: number) {
    return this.products.filter(item =>item.id===id)[0]
  }
  edit(productUpdate){
this.products = this.products.map(item =>{
  if (productUpdate.id===item.id){
    return productUpdate
  }else {
    return item;
  }
})
  }
  delete(productDelete){
    return this.products = this.products.filter(product => product.id !== productDelete.id )
  }
}
