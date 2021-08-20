import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-sellers',
  templateUrl: './admin-sellers.component.html',
  styleUrls: ['./admin-sellers.component.css'],
})
export class AdminSellersComponent implements OnInit {
  adminDetails: any[] = [];
  admins: any[] = [];
  loading = false;
  adminsMeta: any = { name: '', email: '', phone: '', email2: '', rank: '' };
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAdimDetails();
  }

  getAdimDetails() {
    this.loading = true;
    this.dataService.getAllAdminDetails().subscribe({
      next: (data: any) => {
        this.adminDetails = data.data;
        this.adminsMeta = {
          name: data.meta.admin_name,
          email: data.meta.admin_email,
          phone: data.meta.admin_phone,
          email2: data.meta.preserve_email,
          rank: data.meta.rank,
        };
        // this.admins = this.getAdimDetails(this.adminDetails);
        // this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }
}
// 'data' => [
//   'type' => 'admins',
//   'admin_id' => $this->id,
//   'attributes' => [
//       'admin_name' => $this->name,
//       'admin_email' => $this->email,
//       'admin_phone' => $this->phone,
//       'preserve_email' => $this->email,
//       'active' => $this->active,
//       'rank' => $this->rank,
