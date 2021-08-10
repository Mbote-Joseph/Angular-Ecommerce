import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  adminEditCategory!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminEditCategory = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(20)]],
      newCategory: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminEditCategory.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminEditCategory.invalid) {
      return;
    }
  }
}
