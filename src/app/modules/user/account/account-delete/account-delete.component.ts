import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css'],
})
export class AccountDeleteComponent implements OnInit {
  loading = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  deleteAccount() {
    this.loading = true;
    this.userService.deleteUserAccount().subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/user/register');
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
