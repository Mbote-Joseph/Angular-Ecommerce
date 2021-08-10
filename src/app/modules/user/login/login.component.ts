import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private account: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userLoginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.userLoginForm.invalid) {
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
