import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountSellerService } from 'src/app/services/account-seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css'],
})
export class SellerLoginComponent implements OnInit {
  sellerLoginForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private account: AccountSellerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sellerLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.sellerLoginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.sellerLoginForm.invalid) {
      return;
    }

    this.loading = true;
    this.submitted = true;
    this.account.login(this.f.email.value, this.f.password.value).subscribe({
      next: (token: string) => {
        this.account.userToken = token;
        this.router.navigateByUrl('/seller/account');
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }
}
