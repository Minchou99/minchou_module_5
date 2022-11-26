import { Injectable } from '@angular/core';
import {Product} from "../interface/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]=[{
    id: 1,
    name: 'IPhone 12',
    price: 24000000,
    description: 'New'
  },{
    id: 2,
    name: 'IPhone 11',
    price: 15600000,
    description: 'Like New'

  },{
    id: 3,
    name: 'IPhone X',
    price: 75400000,
    description: '97%'
  },{
    id:4,
    name: 'IPhone 8',
    price: 96800000,
    description: '98%'
  },{
    id: 5,
    name: 'IPhone 11 Pro',
    price: 18950000,
    description: 'Like New'
  }]

  constructor() { }

  getAll(){
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
