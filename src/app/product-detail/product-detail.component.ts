import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Discuss, Product, ProductService} from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Discuss[];
  constructor(
     private routerInfo: ActivatedRoute,
     private productService: ProductService
  ) {
  }
  ngOnInit() {
    console.log('我进了details了');
    console.log(this.routerInfo.snapshot.params);
    const productId: number = this.routerInfo.snapshot.params['productId'];
    console.log(productId);
    this.product = this.productService.getProduct(productId);
    console.log(this.product);
    this.comments = this.productService.getCommentsForProductId(productId);
    console.log(this.comments);
  }

}
