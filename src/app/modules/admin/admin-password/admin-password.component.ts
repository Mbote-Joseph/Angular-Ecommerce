import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from 'src/app/shared/helpers/must-match.validator';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.css'],
})
export class AdminPasswordComponent implements OnInit {
  adminPasswordUpdateForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminPasswordUpdateForm = this.formBuilder.group(
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
    return this.adminPasswordUpdateForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminPasswordUpdateForm.invalid) {
      return;
    }
  }
}
