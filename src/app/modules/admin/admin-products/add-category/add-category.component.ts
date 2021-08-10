import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  adminAddCategory!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private admin: AdminService) {}

  ngOnInit(): void {
    this.adminAddCategory = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminAddCategory.controls;
  }

  onSubmit(formData: any) {
    this.admin.createTopCategory(formData).subscribe(() => {
      console.log(formData);
    });

    this.submitted = true;

    // stop here if form is invalid
    if (this.adminAddCategory.invalid) {
      return;
    }
  }
}
