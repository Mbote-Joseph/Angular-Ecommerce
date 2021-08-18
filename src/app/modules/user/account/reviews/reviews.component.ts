import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class productReviews {
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
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  imagePath = 'assets/images';
  productsReviews: productReviews[];

  constructor(private httpClient: HttpClient) {
    this.productsReviews = [];
  }

  ngOnInit(): void {
    this.getProductsReviews();
  }

  getProductsReviews() {
    this.httpClient
      .get<any>(
        `https://peaceful-beyond-74495.herokuapp.com/api/products/${productReviews}/productReviews/${productReviews}`
      )
      .subscribe((response) => {
        console.log(response);
        this.productsReviews = response;
      });
  }
}
