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
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden: boolean = true;

  constructor(
     private routerInfo: ActivatedRoute,
     private productService: ProductService
  ) {
  }
  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(
      product => this.product = product
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      comments => this.comments = comments
    );
  }
  addComment() {
    let comment = new Discuss(0, this.product.id, new Date().toISOString(), '菜菜', this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce(( sum, comments) => sum + comments.rating, 0);
    console.log(sum);
    this.product.rating = sum / this.comments.length;
    console.log(this.product.rating);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
