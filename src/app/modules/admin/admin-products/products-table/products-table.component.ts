import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit {
  productList = [];

  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // get products
  getProducts(): void {
    this.admin.viewProducts().subscribe((products: any) => {
      this.productList = products;
      console.log(products);
    });
  }

  // get seller
  getSeller(id: string) {
    return this.admin.viewSeller(id).subscribe(() => {
      console.log('Got seller');
    });
  }

  // delete product
  deleteProduct(id: string) {
    return this.admin.deleteProduct(id).subscribe(() => {
      console.log('Product deleted');
    });
  }
}
