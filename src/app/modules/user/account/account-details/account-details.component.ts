import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  userInfo: any[] = [];
  userDetails: any[] = [];
  loading = false;
  userDetailsForm!: FormGroup;
  submitted = false;

  constructor(
    private UserService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
    this.viewUserInfo();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userDetailsForm.controls;
  }

  onUpdate() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userDetailsForm.invalid) {
      return;
    }

    this.loading = true;
    this.viewUserInfo();
  }

  // view user info
  viewUserInfo() {
    this.loading = true;
    this.UserService.getUserProfile().subscribe({
      next: (data: any) => {
        this.loading = false;
        this.userInfo = data;
        this.userDetails = this.getUserInfo(this.userInfo);
        this.f.firstName.setValue(this.userDetails[0].name.split(' ')[0]);
        this.f.lastName.setValue(this.userDetails[0].name.split(' ')[1]);
        this.f.email.setValue(this.userDetails[0].email);
        this.f.phoneNumber.setValue(this.userDetails[0].phone);
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

    // console.log(items[0]);

    return items;
  }
}
