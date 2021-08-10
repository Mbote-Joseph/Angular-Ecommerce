import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm!: FormGroup;
  submitted = false;
  currentYear!: number;

  constructor(private formBuilder: FormBuilder) {}

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
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminLoginForm.invalid) {
      return;
    }
  }
}
