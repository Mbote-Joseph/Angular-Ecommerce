import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-reviews',
  templateUrl: './seller-reviews.component.html',
  styleUrls: ['./seller-reviews.component.css'],
})
export class SellerReviewsComponent implements OnInit {
  categories = ['reviewed-items'];

  constructor() {}

  ngOnInit(): void {}
}
