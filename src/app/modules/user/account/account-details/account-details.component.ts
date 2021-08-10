import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  userInfo: any[] = [];
  userDetails: any[] = [];
  loading = true;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.viewUserInfo();
  }

  viewUserInfo() {
    this.loading = true;
    this.UserService.getUserProfile().subscribe({
      next: (data: any) => {
        this.loading = false;
        this.userInfo = data;
        this.userDetails = this.getUserInfo(this.userInfo);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getUserInfo(data: any) {
    let items: any[] = [];
    let item = data.data;

    items.push({
      id: item.user_id,
      name: item.attributes.user_name,
      email: item.attributes.user_email,
      phone: item.attributes.phone ? item.attributes.phone : 'N/A',
    });

    console.log(items[0]);

    return items;
  }
}
