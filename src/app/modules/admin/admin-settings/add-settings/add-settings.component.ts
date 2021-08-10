import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-settings',
  templateUrl: './add-settings.component.html',
  styleUrls: ['./add-settings.component.css'],
})
export class AddSettingsComponent implements OnInit {
  adminAddSettings!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminAddSettings = this.formBuilder.group({
      setting: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminAddSettings.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminAddSettings.invalid) {
      return;
    }
  }
}
