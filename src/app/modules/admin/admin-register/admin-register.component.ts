import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css'],
})
export class AdminRegisterComponent implements OnInit {
  adminRegisterForm!: FormGroup;
  submitted = false;
  currentYear!: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();

    this.adminRegisterForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
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
    return this.adminRegisterForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminRegisterForm.invalid) {
      return;
    }
  }
}
