import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from '../_services/user.service';

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
  loading = false;
  items: any[] = [];
  cartItems: any[] = [];
  orders: any[] = [];
  cartMeta: any = { currency: '', totalPrice: '', itemsCount: '' };

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.userService.viewAllOrders().subscribe({
      next: (data: any) => {
        this.orders = this.getOrders(data.data);
        this.cartItems = this.getCartItemsList(
          data.data[0].data.attributes.cartProducts.data
        );
        console.log(this.orders);
        // console.log(data.data[0].attributes);
        // this.cartItems = this.getCartItemsList(data.data.attributes.cartProducts);
      },
      error: () => {},
    });
  }

  getOrders(data: any) {
    let orders: any[] = [];
    for (const datum in data) {
      if (Object.prototype.hasOwnProperty.call(data, datum)) {
        const order = data[datum].data;

        // add each order to orders array
        orders.push({
          id: order.order_id,
          paymentDetails: order.attributes.paymentDetails,
          cartProducts: order.attributes.cartProducts,
          userDetails: order.attributes.userDetails,
          shippingDetails: order.attributes.shippingDetails,
          status: order.attributes.status,
        });
      }
    }
    return orders;
  }

  getSpecificOrders(orders: any, status: ['paid', 'unpaid']) {
    let specificOrders: any[] = [];

    orders.forEach((order: any) => {
      specificOrders.push(order);
    });

    return specificOrders;
  }

  getCartItems() {
    this.loading = true;
    this.dataService.getAllCartItems().subscribe({
      next: (data: any) => {
        this.cartItems = data.data;
        this.cartMeta = {
          currency: data.meta.currency,
          itemsCount: data.meta.cart_items_count,
          totalPrice: data.meta.total_price,
        };
        this.items = this.getCartItemsList(this.cartItems);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }

  getCartItemsList(data: any) {
    let items: any[] = [];
    for (const datum in data) {
      if (Object.prototype.hasOwnProperty.call(data, datum)) {
        const item = data[datum].data;

        // add each item to cart items array
        items.push({
          id: item.cartItem_id,
          price: item.attributes.productDetails.data.attributes.product_price,
          currency: item.attributes.currency,
          name: item.attributes.productDetails.data.attributes.product_name,
          description:
            item.attributes.productDetails.data.attributes.product_details,
          discountPercent: item.attributes.discount_percent,
          imagePath:
            item.attributes.productDetails.data.attributes.cover_image.data
              .attributes.path,
          quantity: item.attributes.quantity,
          totalPrice: item.attributes.total_price,
        });
      }
    }
    return items;
  }

  // plus item
  plusItem(itemId: string, quantity: string) {
    this.loading = true;
    this.dataService.editCartItem(itemId, `${+quantity + 1}`).subscribe(() => {
      this.loading = false;
      this.getCartItems();
    });
  }

  // minus item
  minusItem(itemId: string, quantity: string) {
    this.loading = true;
    this.dataService.editCartItem(itemId, `${+quantity - 1}`).subscribe(() => {
      this.loading = false;
      this.getCartItems();
    });
    // this.getCartItems();
  }

  // delete item
  deleteItem(itemId: string) {
    this.loading = true;
    this.dataService.deleteCartItem(itemId).subscribe(() => {
      this.getCartItems();
      this.loading = true;
    });
  }
}
