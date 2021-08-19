import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  deliveryForm!: FormGroup;
  submitted = false;
  loading = false;
  user = { name: '', email: '' };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      pickup: ['', Validators.required],
    });
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.user = {
          name: data.data.attributes.user_name,
          email: data.data.attributes.user_email,
        };
      },
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.deliveryForm.controls;
  }

  get location() {
    return `${this.f.city.value}, ${this.f.region.value}`;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.deliveryForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .createShippingDetail(
        this.f.phoneNumber.value,
        this.f.region.value,
        this.location
        // this.f.city.value,
        // this.f.pickup.value
      )
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['../payment'], { relativeTo: this.route });
        },
        error: () => {
          this.loading = false;
        },
      });

    // display form values on success
    // alert(
    //   'SUCCESS!! :-)\n\n' + JSON.stringify(this.deliveryForm.value, null, 4)
    // );
  }

  onReset() {
    this.submitted = false;
    this.deliveryForm.reset();
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
