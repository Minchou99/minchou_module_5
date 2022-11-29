import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {CategoryService} from '../service/category.service';
import {Category} from '../interface/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  message: string;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(
      data => {
        this.categories = data;
      }, error => {
        console.log('That bai');
      }, () => {
        console.log('Ket thuc');
      }
    );
  }

  submit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.productService.saveProduct(this.productForm.value).subscribe(
        data => {
          this.message = 'Thanh cong';
          this.productForm.reset();
        }, e => {
          this.message = 'That bai';
        });
    }
  }

  // getCategoryList() {
  //   this.categoryService.findAll().subscribe(
  //     data => {
  //       this.categories = data;
  //     }, error => {
  //       console.log('That bai');
  //     }, () => {
  //       console.log('Ket thuc');
  //     }
  //   );
  // }
}
