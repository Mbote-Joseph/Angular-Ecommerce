import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Product {
  constructor(
    public name: string,
    public price: number,
    public currency: string,
    public discount_percent: number,
    public quantity_in_stock: number,
    public video: string,
    public details: string,
    public unit: string,
    public active: string,
    public minimum_order_quantity: number,
    public product_category_id: number,
    public cover_image: string,
    public image: string,
    public rating: string
  ) {}
}

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css'],
})
export class SellerProductsComponent implements OnInit {
  categories = ['products'];
  products: Product[];

  constructor(private httpClient: HttpClient) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducts();
    //this.updateProducts();
  }

  getProducts() {
    this.httpClient
      .get<any>(
        'https://peaceful-beyond-74495.herokuapp.com/api/seller/products'
      )
      .subscribe((response) => {
        // console.log(response);
        this.products = response;
      });
  }
  // updateProducts() {
  //   this.httpClient
  //     .patch<any>(
  //       `https://peaceful-beyond-74495.herokuapp.com/api/seller/products/${id}`
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.products = response;
  //     });
  // }
}
