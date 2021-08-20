import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-seller-table',
  templateUrl: './seller-table.component.html',
  styleUrls: ['./seller-table.component.css'],
})
export class SellerTableComponent implements OnInit {
  sellerDetails: any[] = [];
  sellers: any[] = [];
  loading = false;
  sellersMeta: any = { name: '', email: '', phone: '', email2: '', rank: '' };
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSellerDetails();
  }

  getSellerDetails() {
    this.loading = true;
    this.dataService.getAllSellerDetails().subscribe({
      next: (data: any) => {
        this.sellerDetails = data.data;
        this.sellersMeta = {
          name: data.meta.seller_name,
          email: data.meta.seller_email,
          phone: data.meta.seller_phone,
          email2: data.meta.preserve_email,
          rank: data.meta.rank,
        };
        // this.sellers = this.getSellerDetails(this.sellerDetails);
        // this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }
}
