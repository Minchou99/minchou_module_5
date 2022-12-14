import {Component, OnInit} from '@angular/core';
import {Category} from '../interface/category';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
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


}
