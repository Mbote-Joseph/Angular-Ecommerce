import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  items: any[] = [];
  loading = false;
  grandTotal = 0;
  currency = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.loading = true;
    this.dataService.getAllCartItems().subscribe({
      next: (data: any) => {
        this.cartItems = data.data;
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

        if (!this.currency) {
          this.currency = item.attributes.currency;
        }

        this.grandTotal += +item.attributes.total_price;
      }
    }
    return items;
  }

  // plus item
  plusItem(itemId: string, quantity: string) {
    this.loading = true;
    this.dataService.editCartItem(itemId, `${+quantity + 1}`).subscribe(() => {
      this.loading = false;
    });
    this.getCartItems();
  }

  // minus item
  minusItem(itemId: string, quantity: string) {
    this.loading = true;
    this.dataService.editCartItem(itemId, `${+quantity - 1}`).subscribe(() => {
      this.loading = false;
    });
    this.getCartItems();
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
