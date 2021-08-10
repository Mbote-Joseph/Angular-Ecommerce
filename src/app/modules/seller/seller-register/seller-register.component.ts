import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../../shared/helpers/must-match.validator';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css'],
})
export class SellerRegisterComponent implements OnInit {
  sellerTypes = ['retailer', 'wholesaler', 'manufacturer', 'other'];
  categories = [
    'gardens & outdoors',
    'health & body',
    'home & office',
    'phones & tablets',
    'computing',
    'electronics',
    'fashion',
    'gaming',
    'baby products',
    'sporting goods',
    'supermarket',
  ];
  banks = ['A', 'B', 'C', 'D', 'E'];
  branches = [1, 2, 3, 4, 5];
  registerForm!: FormGroup;
  submitted = false;
  step!: number;
  title!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.step = +params['step'];
      this.title = `${this.step} out of 3 steps`;
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        sellerName: ['', Validators.required],
        sellerType: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        shopName: ['', Validators.required],
        location: ['', Validators.required],
        kraPin: ['', Validators.required],
        sellerCategory: ['', Validators.required],
        bank: ['', Validators.required],
        bankBranch: ['', Validators.required],
        account: [
          '',
          [Validators.required, Validators.minLength(6), Validators.min(1)],
        ],
      },
      {
        validators: [
          MustMatch('password', 'confirmPassword'),
          MustMatch('email', 'confirmEmail'),
        ],
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onCancel() {
    this.registerForm.reset();
    this.router.navigate(['/seller']);
  }

  onNext() {
    // if (this.registerForm.invalid) {
    //   return;
    // }

    this.router.navigate([`../${++this.step}`], { relativeTo: this.route });
  }

  onPrevious() {
    this.router.navigate([`../${--this.step}`], {
      relativeTo: this.route,
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
