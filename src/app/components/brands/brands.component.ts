import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands = [
    { name: 'official stores', color: '#f94229' },
    { name: 'Retail', color: '#000000' },
    { name: 'wholesale', color: '#67cf3c' },
    { name: 'manufacturer', color: '#507ef7' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
