import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountAdminService } from 'src/app/services/account-admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm!: FormGroup;
  submitted = false;
  currentYear!: number;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private account: AccountAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();

    this.adminLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminLoginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.adminLoginForm.invalid) {
      return;
    }

    this.loading = true;
    this.submitted = true;
    this.account.login(this.f.email.value, this.f.password.value).subscribe({
      next: (token: string) => {
        this.account.userToken = token;
        this.router.navigateByUrl('/user/account');
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }
}
