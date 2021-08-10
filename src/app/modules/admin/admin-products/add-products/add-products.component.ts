import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  categories = [
    'gardens & outdoors',
    'health & body',
    'home & office',
    'phones & tablets',
    'computing',
    'electronics',
    'fashion',
    'gaming',
    'baby products',
    'sporting goods',
    'supermarket',
  ];

  constructor() {}

  ngOnInit(): void {}
}
