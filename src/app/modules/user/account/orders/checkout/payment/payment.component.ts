import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdersComponent } from '../../orders.component';

export class Orders {
  constructor(public shipping_id: number, public payment_id: number) {}
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  orders: Orders[];

  constructor(private httpClient: HttpClient) {
    this.orders = [];
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.httpClient
      .get<any>(
        'https://peaceful-beyond-74495.herokuapp.com/api/products/(api/unpaid/orders'
      )
      .subscribe((response) => {
        console.log(response);
        this.orders = response;
      });
  }
}
