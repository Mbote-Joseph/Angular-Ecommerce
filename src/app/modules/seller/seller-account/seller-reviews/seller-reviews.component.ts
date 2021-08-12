import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Review {
  constructor(
    public rating: string,
    public review: string,
    public reviewAction: string,
    public reviewBy: string,
    public user_id: number,
    public user_name: string,
    public product_slug: string,
    public product_name: string,
    public product_seller_id: number,
    public created_at: string
  ) {}
}
@Component({
  selector: 'app-seller-reviews',
  templateUrl: './seller-reviews.component.html',
  styleUrls: ['./seller-reviews.component.css'],
})
export class SellerReviewsComponent implements OnInit {
  categories = ['reviewed-items'];
  reviews: Review[];

  constructor(private httpClient: HttpClient) {
    this.reviews = [];
  }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.httpClient
      .get<any>(
        'https://peaceful-beyond-74495.herokuapp.com/api/seller/productsReviews'
      )
      .subscribe((response) => {
        console.log(response);
        this.reviews = response;
      });
  }
}
