import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';

@Component({
  selector: 'app-seller-password',
  templateUrl: './seller-password.component.html',
  styleUrls: ['./seller-password.component.css'],
})
export class SellerPasswordComponent implements OnInit {
  sellerPasswordResetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sellerPasswordResetForm = this.formBuilder.group(
      {
        currentPassword: ['', Validators.minLength(6)],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [MustMatch('password', 'confirmPassword')],
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.sellerPasswordResetForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.sellerPasswordResetForm.invalid) {
      return;
    }
  }
}
