import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Orders {
  constructor(
    public order_id: number,
    public shippingDetails: string,
    public paymentDetails: string,
    public cartProducts: string,
    public userDetails: string,
    public rating: number,
    public description: string,
    public price: number
  ) {}
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  imagePath = 'assets/images/';
  orders: Orders[];
  unpaidOrders: Orders[];
  paidOrders: Orders[];

  constructor(private httpClient: HttpClient) {
    this.paidOrders = [];
    this.unpaidOrders = [];
    this.orders = [];
  }

  ngOnInit(): void {
    this.getPaid();
    this.getUnpaid();
  }
  getUnpaid() {
    this.httpClient
      .get<any>(`https://peaceful-beyond-74495.herokuapp.com/api/unpaid/orders`)
      .subscribe((response) => {
        console.log(response);
        this.unpaidOrders = response;
      });
  }

  getPaid() {
    this.httpClient
      .get<any>(`https://peaceful-beyond-74495.herokuapp.com/api/paid/orders`)
      .subscribe((response) => {
        console.log(response);
        this.unpaidOrders = response;
      });
  }
}
