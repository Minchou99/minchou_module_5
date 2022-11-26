import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
