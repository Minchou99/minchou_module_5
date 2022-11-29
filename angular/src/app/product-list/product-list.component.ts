import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../interface/product';
import {Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {Category} from '../interface/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  message: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.findAll().subscribe(
      data => {
        this.products = data;
      }, error => {
        this.message = 'That bai';
      }, () => {
        console.log('ket thuc');
      }
    );
  }
}
