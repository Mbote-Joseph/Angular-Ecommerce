import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css'],
})
export class EditSettingsComponent implements OnInit {
  adminEditSettings!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminEditSettings = this.formBuilder.group({
      setting: ['', [Validators.required, Validators.maxLength(20)]],
      newSetting: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminEditSettings.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminEditSettings.invalid) {
      return;
    }
  }
}
