import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  products: Product[] = [
    new Product(1, '第一个商品', 1.99, 2.5, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '文教商品']),
    new Product(2, '第二个商品', 2.99, 4.5, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '文教商品']),
    new Product(3, '第三个商品', 3.99, 3.5, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '文教商品']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '文教商品']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '文教商品']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '文教商品'])
  ];
  private Discuss: Discuss[] = [
    new Discuss(1, 1, '2019-4-4 4:44:44', '张三', 3, '东西不错！'),
    new Discuss(2, 1, '2019-4-4 4:44:44', '王三', 3, '东西不错！'),
    new Discuss(3, 1, '2019-4-4 4:44:44', '李三', 3, '东西不错！'),
    new Discuss(4, 2, '2019-4-4 4:44:44', '赵三', 3, '东西不错！')
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find( (product) => product.id == id );
  }
  getCommentsForProductId(id: number): Discuss[] {
    console.log(this.Discuss[id]);
    return this.Discuss.filter((comment: Discuss) => comment.productId == id);
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

