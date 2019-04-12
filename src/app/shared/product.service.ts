import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private Discuss: Discuss[] = [
  //   new Discuss(1, 1, '2019-4-4 4:44:44', '张三', 3, '东西不错！'),
  //   new Discuss(2, 1, '2019-4-4 4:44:44', '王三', 3, '东西不错！'),
  //   new Discuss(3, 1, '2019-4-4 4:44:44', '李三', 3, '东西不错！'),
  //   new Discuss(4, 2, '2019-4-4 4:44:44', '赵三', 3, '东西不错！')
  // ];
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('/api/product' + id);
  }

  getCommentsForProductId(id: number): Observable<Discuss[]> {
    return this.httpClient.get<Discuss[]>('/api/product' + id + '/comments');
    // return this.Discuss.filter((comment: Discuss) => comment.productId == id);
  }
  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '文教商品'];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
export class Discuss {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}

