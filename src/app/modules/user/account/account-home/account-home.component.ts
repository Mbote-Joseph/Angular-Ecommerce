import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css'],
})
export class AccountHomeComponent implements OnInit {
  loading = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  logout() {
    this.loading = true;
    this.accountService.logout().subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
